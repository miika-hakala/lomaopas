import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { DailyBriefing, BriefingSource } from '$lib/lomasihteeri/briefing';
import type { EventItem } from '$lib/lomasihteeri/events';
import type { AlertItem, AlertLevel } from '$lib/lomasihteeri/alerts';
import { parseAemetDescription, generateConclusion } from '$lib/lomasihteeri/weather';
import { env } from '$env/dynamic/private';

/**
 * Unified Daily Briefing Endpoint
 *
 * Yhdistää sää, varoitukset ja tapahtumat yhteen kutsuun.
 * In-memory cache: TTL 30 minuuttia, key = "fuengirola|YYYY-MM-DD"
 */

// === CACHE ===

interface CacheEntry {
  ts: number;
  data: DailyBriefing;
}

// TTL: 30 minuuttia (1800000 ms)
const CACHE_TTL_MS = 30 * 60 * 1000;

// Module-scoped cache Map
const briefingCache = new Map<string, CacheEntry>();

function getCacheKey(city: string, date: string): string {
  return `${city}|${date}`;
}

function getCachedBriefing(city: string, date: string): DailyBriefing | null {
  const key = getCacheKey(city, date);
  const entry = briefingCache.get(key);

  if (!entry) return null;

  const age = Date.now() - entry.ts;
  if (age > CACHE_TTL_MS) {
    briefingCache.delete(key);
    return null;
  }

  return entry.data;
}

function setCachedBriefing(city: string, date: string, data: DailyBriefing): void {
  const key = getCacheKey(city, date);
  briefingCache.set(key, { ts: Date.now(), data });

  // Siivoa vanhat entryt (max 10 cachessa)
  if (briefingCache.size > 10) {
    const oldestKey = briefingCache.keys().next().value;
    if (oldestKey) briefingCache.delete(oldestKey);
  }
}

// === AEMET CONFIG ===

const AEMET_BASE_URL = 'https://opendata.aemet.es/opendata/api';
const FUENGIROLA_MUNICIPIO = '29054';
const MALAGA_ZONE = '61';

// === WEATHER FETCH ===

interface WeatherResult {
  summary: string;
  conclusion: string;
  ok: boolean;
  source: 'aemet' | 'fallback';
}

async function fetchWeather(fetch: typeof globalThis.fetch, apiKey: string | undefined): Promise<WeatherResult> {
  const fallback: WeatherResult = {
    summary: 'Säätietoja ei saatu.',
    conclusion: 'Suunnittele päivä joustavasti.',
    ok: false,
    source: 'fallback',
  };

  if (!apiKey) return fallback;

  try {
    const metaUrl = `${AEMET_BASE_URL}/prediccion/especifica/municipio/diaria/${FUENGIROLA_MUNICIPIO}`;
    const metaResponse = await fetch(metaUrl, {
      headers: { 'api_key': apiKey, 'Accept': 'application/json' },
    });

    if (!metaResponse.ok) return fallback;

    const metaData = await metaResponse.json();
    if (!metaData.datos) return fallback;

    const dataResponse = await fetch(metaData.datos);
    if (!dataResponse.ok) return fallback;

    const weatherData = await dataResponse.json();
    if (!Array.isArray(weatherData) || weatherData.length === 0) return fallback;

    const forecast = weatherData[0];
    if (!forecast.prediccion?.dia?.length) return fallback;

    const today = forecast.prediccion.dia[0];

    let tempMax = 25;
    if (today.temperatura?.maxima !== undefined) {
      tempMax = parseInt(today.temperatura.maxima, 10);
    }

    let estadoCielo = 'vaihtelevaa';
    if (today.estadoCielo && Array.isArray(today.estadoCielo)) {
      const midday = today.estadoCielo.find(
        (e: { periodo?: string; descripcion?: string }) =>
          e.periodo === '12-24' || e.periodo === '00-24'
      );
      if (midday?.descripcion) {
        estadoCielo = midday.descripcion;
      } else if (today.estadoCielo[0]?.descripcion) {
        estadoCielo = today.estadoCielo[0].descripcion;
      }
    }

    const description = parseAemetDescription(estadoCielo);
    const summary = `Päivä on ${description}, ${tempMax} °C.`;
    const conclusion = generateConclusion(tempMax, description);

    return { summary, conclusion, ok: true, source: 'aemet' };
  } catch {
    return fallback;
  }
}

// === ALERTS FETCH ===

const phenomenonTranslations: Record<string, string> = {
  'viento': 'tuuli', 'lluvia': 'sade', 'tormenta': 'ukkosmyrsky',
  'temperatura': 'lämpötila', 'calor': 'helleaalto', 'frio': 'pakkanen',
  'nieve': 'lumisade', 'niebla': 'sumu', 'oleaje': 'aallokko',
  'costero': 'rannikko', 'polvo': 'pöly', 'calima': 'hiekkamyrsky',
};

function translatePhenomenon(text: string): string {
  const lower = text.toLowerCase();
  for (const [key, value] of Object.entries(phenomenonTranslations)) {
    if (lower.includes(key)) return value;
  }
  return 'sää';
}

function mapSeverityToLevel(severity: string): AlertLevel {
  const s = severity?.toLowerCase() || '';
  if (s.includes('extreme') || s.includes('rojo')) return 'red';
  if (s.includes('severe') || s.includes('naranja')) return 'orange';
  if (s.includes('moderate') || s.includes('amarillo')) return 'yellow';
  return 'info';
}

function getAlertAdvice(phenomenon: string, level: AlertLevel): string {
  const p = phenomenon.toLowerCase();
  if (p.includes('tuuli')) return level === 'red' ? 'Vältä ulkona liikkumista.' : 'Varo irtoavia esineitä ulkona.';
  if (p.includes('sade') || p.includes('ukkosmyrsky')) return 'Varaa sateenvarjo ja vältä tulva-alueita.';
  if (p.includes('lämpötila') || p.includes('helleaalto')) return 'Juo riittävästi vettä ja vältä keskipäivän auringonpaistetta.';
  if (p.includes('aallokko') || p.includes('rannikko')) return 'Vältä uimista ja rannikkoalueita.';
  return 'Seuraa tilannetta ja noudata viranomaisten ohjeita.';
}

interface AlertsResult {
  items: AlertItem[];
  ok: boolean;
  source: 'aemet' | 'fallback';
}

async function fetchAlerts(fetch: typeof globalThis.fetch, apiKey: string | undefined): Promise<AlertsResult> {
  const fallback: AlertsResult = { items: [], ok: false, source: 'fallback' };

  if (!apiKey) return { items: [], ok: true, source: 'fallback' };

  try {
    const metaUrl = `${AEMET_BASE_URL}/avisos_cap/ultimoelaborado/area/${MALAGA_ZONE}`;
    const metaResponse = await fetch(metaUrl, {
      headers: { 'api_key': apiKey, 'Accept': 'application/json' },
    });

    if (!metaResponse.ok) return { items: [], ok: true, source: 'fallback' };

    const metaData = await metaResponse.json();
    if (!metaData.datos) return { items: [], ok: true, source: 'aemet' };

    const dataResponse = await fetch(metaData.datos);
    if (!dataResponse.ok) return { items: [], ok: true, source: 'fallback' };

    const alertsData = await dataResponse.json();
    const items: AlertItem[] = [];

    if (Array.isArray(alertsData)) {
      for (const alert of alertsData) {
        const info = alert.info || alert;
        if (!info) continue;

        const severity = info.severity || info.nivel || '';
        const event = info.event || info.fenomeno || '';
        const headline = info.headline || info.texto || '';

        if (!severity || severity.toLowerCase() === 'minor') continue;

        const level = mapSeverityToLevel(severity);
        if (level === 'info') continue;

        const phenomenon = translatePhenomenon(event || headline);
        items.push({
          level,
          title: `Säävaroitus: ${phenomenon}`,
          detail: getAlertAdvice(phenomenon, level),
        });
      }
    }

    const priorityOrder: AlertLevel[] = ['red', 'orange', 'yellow', 'info'];
    items.sort((a, b) => priorityOrder.indexOf(a.level) - priorityOrder.indexOf(b.level));

    return { items: items.slice(0, 3), ok: true, source: 'aemet' };
  } catch {
    return { items: [], ok: true, source: 'fallback' };
  }
}

// === EVENTS FETCH ===

const COSTA_DEL_SOL_EVENTS_URL = 'https://www.visitcostadelsol.com/api/events';

interface RecurringEvent {
  dayOfWeek: number;
  title: string;
  when?: string;
  area?: string;
}

const recurringEvents: RecurringEvent[] = [
  { dayOfWeek: 2, title: 'Los Boliches kirpputori', when: 'klo 9–14', area: 'Recinto Ferial' },
  { dayOfWeek: 3, title: 'Rantapromenadin iltakävely', when: 'auringonlaskun aikaan', area: 'Paseo Marítimo' },
  { dayOfWeek: 4, title: 'Tapas-reitti vanhassakaupungissa', when: 'illalla', area: 'Casco Antiguo' },
  { dayOfWeek: 5, title: 'Live-musiikkia rantabaareissa', when: 'klo 21 alkaen', area: 'Los Boliches' },
  { dayOfWeek: 6, title: 'Fuengirolan viikonloppumarkkinat', when: 'klo 9–14', area: 'Keskusta' },
  { dayOfWeek: 6, title: 'Perhepäivä Bioparc Fuengirolassa', when: 'klo 10–18', area: 'Bioparc' },
  { dayOfWeek: 0, title: 'Kirpputori Recinto Ferialissa', when: 'klo 9–14', area: 'Recinto Ferial' },
  { dayOfWeek: 0, title: 'Rantapäivä ja chiringuito-lounas', when: 'aamupäivästä', area: 'Rannat' },
  { dayOfWeek: 1, title: 'Rauhallinen päivä: museot ja nähtävyydet', when: 'päivällä', area: 'Keskusta' },
];

const defaultEvents: EventItem[] = [
  { title: 'Rantapromenadin kävelyreitti', when: 'aamupäivällä', area: 'Paseo Marítimo' },
  { title: 'Paikallisia ravintoloita ja terasseja', when: 'lounas tai illallinen', area: 'Keskusta' },
];

function getCuratedEvents(): EventItem[] {
  const dayOfWeek = new Date().getDay();
  const todayRecurring = recurringEvents
    .filter((e) => e.dayOfWeek === dayOfWeek)
    .map(({ title, when, area }) => ({ title, when, area }));
  return todayRecurring.length > 0 ? todayRecurring.slice(0, 3) : defaultEvents.slice(0, 3);
}

interface EventsResult {
  items: EventItem[];
  ok: boolean;
  fallback: boolean;
  source: 'visitcostadelsol-live' | 'fuengirola-curated' | 'fallback';
}

async function fetchEvents(fetch: typeof globalThis.fetch, todayStr: string): Promise<EventsResult> {
  try {
    const url = new URL(COSTA_DEL_SOL_EVENTS_URL);
    url.searchParams.set('municipality', 'fuengirola');
    url.searchParams.set('date', todayStr);
    url.searchParams.set('limit', '10');

    const response = await fetch(url.toString(), {
      headers: { 'Accept': 'application/json', 'User-Agent': 'LomaSihteeri/1.0' },
    });

    if (response.ok) {
      const data = await response.json();
      const events = Array.isArray(data) ? data : data.events || data.items || [];

      if (events.length > 0) {
        const items: EventItem[] = events
          .filter((e: { municipality?: string }) => {
            const m = (e.municipality || '').toLowerCase();
            return m.includes('fuengirola') || m === '';
          })
          .map((e: { title?: string; name?: string; startDate?: string; start_date?: string; place?: string; location?: string }) => ({
            title: e.title || e.name || 'Tapahtuma',
            when: e.startDate || e.start_date ? formatEventTime(e.startDate || e.start_date) : undefined,
            area: e.place || e.location || undefined,
          }))
          .slice(0, 3);

        if (items.length > 0) {
          return { items, ok: true, fallback: false, source: 'visitcostadelsol-live' };
        }
      }
    }
  } catch {
    // Fall through to curated
  }

  // Curated fallback
  const curatedItems = getCuratedEvents();
  return { items: curatedItems, ok: true, fallback: false, source: 'fuengirola-curated' };
}

function formatEventTime(dateStr: string | undefined): string | undefined {
  if (!dateStr) return undefined;
  try {
    const date = new Date(dateStr);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    if (hours === 0 && minutes === 0) return 'koko päivän';
    return `klo ${hours}:${minutes.toString().padStart(2, '0')}`;
  } catch {
    return undefined;
  }
}

// === MAIN HANDLER ===

export const GET: RequestHandler = async ({ fetch }) => {
  const today = new Date().toISOString().split('T')[0];
  const city = 'fuengirola';

  // Check cache first
  const cached = getCachedBriefing(city, today);
  if (cached) {
    return json(cached);
  }

  const apiKey = env.AEMET_API_KEY;

  // Fetch all data in parallel (best-effort)
  const [weatherResult, alertsResult, eventsResult] = await Promise.all([
    fetchWeather(fetch, apiKey),
    fetchAlerts(fetch, apiKey),
    fetchEvents(fetch, today),
  ]);

  const source: BriefingSource = {
    weather: weatherResult.source,
    alerts: alertsResult.source,
    events: eventsResult.source,
  };

  // ok = true if at least weather OR events succeeded
  const ok = weatherResult.ok || eventsResult.ok;

  const briefing: DailyBriefing = {
    ok,
    city,
    date: today,
    source,
    weather: {
      summary: weatherResult.summary,
      conclusion: weatherResult.conclusion,
      ok: weatherResult.ok,
    },
    alerts: {
      items: alertsResult.items,
      ok: alertsResult.ok,
    },
    events: {
      items: eventsResult.items,
      ok: eventsResult.ok,
      fallback: eventsResult.fallback,
    },
  };

  // Cache the result
  setCachedBriefing(city, today, briefing);

  return json(briefing);
};

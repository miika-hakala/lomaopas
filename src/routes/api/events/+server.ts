import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { DailyEvents, EventItem } from '$lib/lomasihteeri/events';

/**
 * Fuengirolan tapahtumat
 *
 * Ensisijainen lähde: Visit Costa del Sol tapahtumakalenteri
 * Fallback: Kuratoidut viikottaiset tapahtumat
 *
 * Päiväkohtaiset markkinat (curated fallback):
 * - Tiistai: Los Boliches kirpputori (Recinto Ferial)
 * - Lauantai: Fuengirola keskustan markkinat
 * - Sunnuntai: Kirpputori (Recinto Ferial)
 */

// === LIVE SOURCE: Visit Costa del Sol ===

const COSTA_DEL_SOL_EVENTS_URL = 'https://www.visitcostadelsol.com/api/events';
const FUENGIROLA_MUNICIPALITY_ID = 'fuengirola';

interface CostaDelSolEvent {
  title?: string;
  name?: string;
  municipality?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  start_date?: string;
  end_date?: string;
  place?: string;
}

function formatEventDate(dateStr: string | undefined): string | undefined {
  if (!dateStr) return undefined;
  try {
    const date = new Date(dateStr);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    if (hours === 0 && minutes === 0) {
      return 'koko päivän';
    }
    return `klo ${hours}:${minutes.toString().padStart(2, '0')}`;
  } catch {
    return undefined;
  }
}

async function fetchLiveEvents(fetch: typeof globalThis.fetch): Promise<EventItem[] | null> {
  try {
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];

    // Hae tapahtumat Visit Costa del Sol APIsta
    const url = new URL(COSTA_DEL_SOL_EVENTS_URL);
    url.searchParams.set('municipality', FUENGIROLA_MUNICIPALITY_ID);
    url.searchParams.set('date', todayStr);
    url.searchParams.set('limit', '10');

    const response = await fetch(url.toString(), {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'LomaSihteeri/1.0',
      },
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    // API voi palauttaa eri muodoissa
    const events: CostaDelSolEvent[] = Array.isArray(data) ? data : data.events || data.items || [];

    if (events.length === 0) {
      return null;
    }

    // Parsitaan tapahtumat
    const items: EventItem[] = events
      .filter((e) => {
        // Suodata vain Fuengirolan tapahtumat
        const municipality = (e.municipality || '').toLowerCase();
        return municipality.includes('fuengirola') || municipality === '';
      })
      .map((e) => ({
        title: e.title || e.name || 'Tapahtuma',
        when: formatEventDate(e.startDate || e.start_date),
        area: e.place || e.location || undefined,
      }))
      .slice(0, 3);

    return items.length > 0 ? items : null;
  } catch {
    return null;
  }
}

// === CURATED FALLBACK ===

interface RecurringEvent {
  dayOfWeek: number; // 0 = sunnuntai, 1 = maanantai, ...
  title: string;
  when?: string;
  area?: string;
}

// Viikottaiset toistuvat tapahtumat (curated baseline)
const recurringEvents: RecurringEvent[] = [
  // Tiistai
  { dayOfWeek: 2, title: 'Los Boliches kirpputori', when: 'klo 9–14', area: 'Recinto Ferial' },
  // Keskiviikko
  { dayOfWeek: 3, title: 'Rantapromenadin iltakävely', when: 'auringonlaskun aikaan', area: 'Paseo Marítimo' },
  // Torstai
  { dayOfWeek: 4, title: 'Tapas-reitti vanhassakaupungissa', when: 'illalla', area: 'Casco Antiguo' },
  // Perjantai
  { dayOfWeek: 5, title: 'Live-musiikkia rantabaareissa', when: 'klo 21 alkaen', area: 'Los Boliches' },
  // Lauantai
  { dayOfWeek: 6, title: 'Fuengirolan viikonloppumarkkinat', when: 'klo 9–14', area: 'Keskusta' },
  { dayOfWeek: 6, title: 'Perhepäivä Bioparc Fuengirolassa', when: 'klo 10–18', area: 'Bioparc' },
  // Sunnuntai
  { dayOfWeek: 0, title: 'Kirpputori Recinto Ferialissa', when: 'klo 9–14', area: 'Recinto Ferial' },
  { dayOfWeek: 0, title: 'Rantapäivä ja chiringuito-lounas', when: 'aamupäivästä', area: 'Rannat' },
  // Maanantai
  { dayOfWeek: 1, title: 'Rauhallinen päivä: museot ja nähtävyydet', when: 'päivällä', area: 'Keskusta' },
];

// Yleiset tapahtumat jos päivälle ei ole erityistä
const defaultEvents: EventItem[] = [
  { title: 'Rantapromenadin kävelyreitti', when: 'aamupäivällä', area: 'Paseo Marítimo' },
  { title: 'Paikallisia ravintoloita ja terasseja', when: 'lounas tai illallinen', area: 'Keskusta' },
];

function getCuratedEvents(): EventItem[] {
  const today = new Date();
  const dayOfWeek = today.getDay();

  // Hae päivän toistuvat tapahtumat
  const todayRecurring = recurringEvents
    .filter((e) => e.dayOfWeek === dayOfWeek)
    .map(({ title, when, area }) => ({ title, when, area }));

  // Jos löytyy päiväkohtaisia, palauta ne (max 3)
  if (todayRecurring.length > 0) {
    return todayRecurring.slice(0, 3);
  }

  // Muuten palauta oletustapahtumat
  return defaultEvents.slice(0, 3);
}

// === MAIN HANDLER ===

export const GET: RequestHandler = async ({ fetch }) => {
  const today = new Date().toISOString().split('T')[0];

  try {
    // Yritä ensin live-lähdettä
    const liveItems = await fetchLiveEvents(fetch);

    if (liveItems && liveItems.length > 0) {
      const result: DailyEvents = {
        ok: true,
        source: 'visitcostadelsol-live',
        date: today,
        items: liveItems,
        fallback: false,
      };
      return json(result);
    }

    // Fallback: kuratoidut tapahtumat
    const curatedItems = getCuratedEvents();

    const result: DailyEvents = {
      ok: true,
      source: 'fuengirola-curated',
      date: today,
      items: curatedItems,
      fallback: false,
    };

    return json(result);
  } catch {
    // Final fallback: tyhjä lista
    const fallback: DailyEvents = {
      ok: false,
      source: 'fallback',
      date: today,
      items: [],
      fallback: true,
    };

    return json(fallback);
  }
};

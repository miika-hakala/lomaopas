import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { AlertsResponse, AlertItem, AlertLevel } from '$lib/lomasihteeri/alerts';
import { env } from '$env/dynamic/private';

// AEMET OpenData API base
const AEMET_BASE_URL = 'https://opendata.aemet.es/opendata/api';

// Málaga provinssi (61) - kattaa Fuengirolan
const MALAGA_ZONE = '61';

// CAP severity -> AlertLevel mapping
function mapSeverityToLevel(severity: string): AlertLevel {
  const s = severity?.toLowerCase() || '';
  if (s.includes('extreme') || s.includes('rojo')) return 'red';
  if (s.includes('severe') || s.includes('naranja')) return 'orange';
  if (s.includes('moderate') || s.includes('amarillo')) return 'yellow';
  return 'info';
}

// Varoitustyyppien käännökset
const phenomenonTranslations: Record<string, string> = {
  'viento': 'tuuli',
  'lluvia': 'sade',
  'tormenta': 'ukkosmyrsky',
  'temperatura': 'lämpötila',
  'calor': 'helleaalto',
  'frio': 'pakkanen',
  'nieve': 'lumisade',
  'niebla': 'sumu',
  'oleaje': 'aallokko',
  'costero': 'rannikko',
  'rissaga': 'meriveden nousu',
  'polvo': 'pöly',
  'calima': 'hiekkamyrsky',
};

function translatePhenomenon(text: string): string {
  const lower = text.toLowerCase();
  for (const [key, value] of Object.entries(phenomenonTranslations)) {
    if (lower.includes(key)) {
      return value;
    }
  }
  return 'sää';
}

// Lyhyt neuvo varoituksen tyypin mukaan
function getAlertAdvice(phenomenon: string, level: AlertLevel): string {
  const p = phenomenon.toLowerCase();

  if (p.includes('tuuli') || p.includes('viento')) {
    return level === 'red' ? 'Vältä ulkona liikkumista.' : 'Varo irtoavia esineitä ulkona.';
  }
  if (p.includes('sade') || p.includes('lluvia') || p.includes('tormenta')) {
    return 'Varaa sateenvarjo ja vältä tulva-alueita.';
  }
  if (p.includes('lämpötila') || p.includes('helleaalto') || p.includes('calor')) {
    return 'Juo riittävästi vettä ja vältä keskipäivän auringonpaistetta.';
  }
  if (p.includes('aallokko') || p.includes('oleaje') || p.includes('costero')) {
    return 'Vältä uimista ja rannikkoalueita.';
  }

  return 'Seuraa tilannetta ja noudata viranomaisten ohjeita.';
}

const FALLBACK: AlertsResponse = {
  ok: false,
  source: 'fallback',
  items: [],
  fallback: true,
};

export const GET: RequestHandler = async ({ fetch }) => {
  const apiKey = env.AEMET_API_KEY;

  // Jos API-avainta ei ole, palauta tyhjä (ei häiriöitä)
  if (!apiKey) {
    return json({
      ok: true,
      source: 'aemet-unavailable',
      items: [],
      fallback: false,
    });
  }

  try {
    // AEMET varoitukset CAP-formaatissa alueelle
    // Endpoint: /api/avisos_cap/archivo/ultimoelaborado/area/{area}
    const metaUrl = `${AEMET_BASE_URL}/avisos_cap/ultimoelaborado/area/${MALAGA_ZONE}`;

    const metaResponse = await fetch(metaUrl, {
      headers: {
        'api_key': apiKey,
        'Accept': 'application/json',
      },
    });

    if (!metaResponse.ok) {
      // API ei vastaa, mutta se ei ole häiriö - näytä OK
      return json({
        ok: true,
        source: 'aemet-error',
        items: [],
        fallback: false,
      });
    }

    const metaData = await metaResponse.json();

    if (!metaData.datos) {
      // Ei dataa, mutta OK
      return json({
        ok: true,
        source: 'aemet',
        items: [],
        fallback: false,
      });
    }

    // Hae varsinainen varoitusdata
    const dataResponse = await fetch(metaData.datos);

    if (!dataResponse.ok) {
      return json({
        ok: true,
        source: 'aemet-data-error',
        items: [],
        fallback: false,
      });
    }

    const alertsData = await dataResponse.json();

    // AEMET palauttaa CAP-formaatin varoitukset
    // Parsitaan relevantit varoitukset
    const items: AlertItem[] = [];

    if (Array.isArray(alertsData)) {
      for (const alert of alertsData) {
        // CAP-formaatti: info-elementti sisältää varoituksen tiedot
        const info = alert.info || alert;

        if (!info) continue;

        // Tarkista onko varoitus voimassa
        const severity = info.severity || info.nivel || '';
        const event = info.event || info.fenomeno || '';
        const headline = info.headline || info.texto || '';

        // Ohita pienet/informatiiviset
        if (!severity || severity.toLowerCase() === 'minor') continue;

        const level = mapSeverityToLevel(severity);

        // Ohita info-tason varoitukset (ei relevantteja turistille)
        if (level === 'info') continue;

        const phenomenon = translatePhenomenon(event || headline);
        const title = `Säävaroitus: ${phenomenon}`;
        const detail = getAlertAdvice(phenomenon, level);

        items.push({ level, title, detail });
      }
    }

    // Max 3 varoitusta, priorisoi vakavimmat
    const priorityOrder: AlertLevel[] = ['red', 'orange', 'yellow', 'info'];
    items.sort((a, b) => priorityOrder.indexOf(a.level) - priorityOrder.indexOf(b.level));

    const result: AlertsResponse = {
      ok: true,
      source: 'aemet',
      items: items.slice(0, 3),
      fallback: false,
    };

    return json(result);
  } catch {
    // Virhetilanteessa näytä OK (ei häiritä käyttäjää teknisillä ongelmilla)
    return json({
      ok: true,
      source: 'aemet-exception',
      items: [],
      fallback: false,
    });
  }
};

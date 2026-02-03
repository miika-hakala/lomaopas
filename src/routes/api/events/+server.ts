import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { DailyEvents, EventItem } from '$lib/lomasihteeri/events';

/**
 * Fuengirolan kuratoidut viikottaiset tapahtumat
 * Lähde: Fuengirolan kaupungin viralliset markkinapäivät + tunnetut toistuvat tapahtumat
 *
 * Päiväkohtaiset markkinat:
 * - Tiistai: Los Boliches kirpputori (Recinto Ferial)
 * - Lauantai: Fuengirola keskustan markkinat
 * - Sunnuntai: Kirpputori (Recinto Ferial)
 */

interface RecurringEvent {
  dayOfWeek: number; // 0 = sunnuntai, 1 = maanantai, ...
  title: string;
  when?: string;
  area?: string;
}

// Viikottaiset toistuvat tapahtumat
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

// Yleiset tapahtumat jotka näytetään jos päivälle ei ole erityistä
const defaultEvents: EventItem[] = [
  { title: 'Rantapromenadin kävelyreitti', when: 'aamupäivällä', area: 'Paseo Marítimo' },
  { title: 'Paikallisia ravintoloita ja terasseja', when: 'lounas tai illallinen', area: 'Keskusta' },
];

function getTodayEvents(): EventItem[] {
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

export const GET: RequestHandler = async () => {
  try {
    const today = new Date().toISOString().split('T')[0];
    const items = getTodayEvents();

    const result: DailyEvents = {
      ok: true,
      source: 'fuengirola-curated',
      date: today,
      items,
      fallback: false,
    };

    return json(result);
  } catch {
    const fallback: DailyEvents = {
      ok: false,
      source: 'fallback',
      date: new Date().toISOString().split('T')[0],
      items: [],
      fallback: true,
    };

    return json(fallback);
  }
};

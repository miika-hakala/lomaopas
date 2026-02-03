/**
 * Tapahtuma-util LomaSihteerille
 */

export interface EventItem {
  title: string;
  when?: string;
  area?: string;
}

export interface DailyEvents {
  ok: boolean;
  source: string;
  date: string;
  items: EventItem[];
  fallback: boolean;
}

export const FALLBACK_EVENTS: DailyEvents = {
  ok: false,
  source: 'fallback',
  date: new Date().toISOString().split('T')[0],
  items: [],
  fallback: true,
};

/**
 * Hakee tapahtumat client-sidelta API-reitin kautta
 */
export async function getDailyEvents(): Promise<DailyEvents> {
  try {
    const response = await fetch('/api/events');

    if (!response.ok) {
      return FALLBACK_EVENTS;
    }

    const data: DailyEvents = await response.json();
    return data;
  } catch {
    return FALLBACK_EVENTS;
  }
}

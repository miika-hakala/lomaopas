/**
 * Unified Daily Briefing helper
 * Hakee kaikki päivän tiedot yhdellä kutsulla
 */

import type { DailyWeather } from './weather';
import type { AlertItem } from './alerts';
import type { EventItem } from './events';

export interface BriefingSource {
  weather: 'aemet' | 'fallback';
  alerts: 'aemet' | 'fallback';
  events: 'visitcostadelsol-live' | 'fuengirola-curated' | 'fallback';
}

export interface BriefingWeather {
  summary: string;
  conclusion: string;
  ok: boolean;
}

export interface BriefingAlerts {
  items: AlertItem[];
  ok: boolean;
}

export interface BriefingEvents {
  items: EventItem[];
  ok: boolean;
  fallback: boolean;
}

export interface DailyBriefing {
  ok: boolean;
  city: string;
  date: string;
  source: BriefingSource;
  weather: BriefingWeather;
  alerts: BriefingAlerts;
  events: BriefingEvents;
}

export const FALLBACK_BRIEFING: DailyBriefing = {
  ok: false,
  city: 'fuengirola',
  date: new Date().toISOString().split('T')[0],
  source: {
    weather: 'fallback',
    alerts: 'fallback',
    events: 'fallback',
  },
  weather: {
    summary: 'Säätietoja ei saatu.',
    conclusion: 'Suunnittele päivä joustavasti.',
    ok: false,
  },
  alerts: {
    items: [],
    ok: false,
  },
  events: {
    items: [],
    ok: false,
    fallback: true,
  },
};

/**
 * Hakee päivän briefing-datan yhdellä kutsulla
 */
export async function getDailyBriefing(): Promise<DailyBriefing> {
  try {
    const response = await fetch('/api/briefing');

    if (!response.ok) {
      return FALLBACK_BRIEFING;
    }

    const data: DailyBriefing = await response.json();
    return data;
  } catch {
    return FALLBACK_BRIEFING;
  }
}

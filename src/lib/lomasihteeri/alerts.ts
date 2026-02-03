/**
 * Varoitus-util LomaSihteerille
 * Käyttää AEMET OpenData API:a säävaroituksiin
 */

export type AlertLevel = 'info' | 'yellow' | 'orange' | 'red';

export interface AlertItem {
  level: AlertLevel;
  title: string;
  detail?: string;
}

export interface AlertsResponse {
  ok: boolean;
  source: string;
  items: AlertItem[];
  fallback: boolean;
}

export const FALLBACK_ALERTS: AlertsResponse = {
  ok: false,
  source: 'fallback',
  items: [],
  fallback: true,
};

/**
 * Hakee varoitukset client-sidelta API-reitin kautta
 */
export async function getAlerts(): Promise<AlertsResponse> {
  try {
    const response = await fetch('/api/alerts');

    if (!response.ok) {
      return FALLBACK_ALERTS;
    }

    const data: AlertsResponse = await response.json();
    return data;
  } catch {
    return FALLBACK_ALERTS;
  }
}

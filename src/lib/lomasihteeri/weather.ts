/**
 * Sää-util LomaSihteerille
 * Käyttää AEMET OpenData API:a (Espanjan virallinen sääpalvelu)
 */

export interface DailyWeather {
  summary: string;
  conclusion: string;
  ok: boolean;
  source: 'aemet' | 'fallback';
}

export const FALLBACK_WEATHER: DailyWeather = {
  summary: 'Säätietoja ei saatu.',
  conclusion: 'Suunnittele päivä joustavasti.',
  ok: false,
  source: 'fallback',
};

// AEMET sääkoodien käännökset (espanja -> suomi, yleiset)
const aemetDescriptions: Record<string, string> = {
  'despejado': 'selkeää',
  'poco nuboso': 'pääosin selkeää',
  'intervalos nubosos': 'puolipilvistä',
  'nuboso': 'pilvistä',
  'muy nuboso': 'hyvin pilvistä',
  'cubierto': 'pilvistä',
  'nubes altas': 'korkeita pilviä',
  'intervalos nubosos con lluvia': 'ajoittaista sadetta',
  'nuboso con lluvia': 'sadetta',
  'muy nuboso con lluvia': 'sadetta',
  'cubierto con lluvia': 'sadetta',
  'lluvia': 'sadetta',
  'lluvia escasa': 'heikkoa sadetta',
  'chubascos': 'sadekuuroja',
  'tormenta': 'ukkosia',
  'tormenta con lluvia': 'ukkosia ja sadetta',
  'niebla': 'sumuista',
  'bruma': 'utuista',
  'calima': 'pölyistä',
};

export function parseAemetDescription(estadoCielo: string): string {
  const lower = estadoCielo.toLowerCase();
  for (const [key, value] of Object.entries(aemetDescriptions)) {
    if (lower.includes(key)) {
      return value;
    }
  }
  return 'vaihtelevaa';
}

export function generateConclusion(tempMax: number, description: string): string {
  const lower = description.toLowerCase();

  // Sade
  if (lower.includes('sadetta') || lower.includes('kuuroja')) {
    return 'Varaa sateenvarjo mukaan.';
  }

  // Ukkonen
  if (lower.includes('ukkosia')) {
    return 'Seuraa säätilannetta päivän aikana.';
  }

  // Lämpötilan mukaan
  if (tempMax >= 32) {
    return 'Vältä keskipäivän kuumuutta, aamu ja ilta parhaita ulkoiluun.';
  }
  if (tempMax >= 26) {
    return 'Aamupäivä paras ulkoiluun.';
  }
  if (tempMax >= 18) {
    return 'Miellyttävä päivä ulkoiluun.';
  }
  return 'Ota kevyt takki mukaan.';
}

/**
 * Hakee sään client-sidelta API-reitin kautta
 */
export async function getDailyWeather(): Promise<DailyWeather> {
  try {
    const response = await fetch('/api/weather');

    if (!response.ok) {
      return FALLBACK_WEATHER;
    }

    const data: DailyWeather = await response.json();
    return data;
  } catch {
    return FALLBACK_WEATHER;
  }
}

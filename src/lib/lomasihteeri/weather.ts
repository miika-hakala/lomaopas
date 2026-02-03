/**
 * Sää-util LomaSihteerille
 * Käyttää Open-Meteo API:a (ilmainen, ei API-avainta)
 */

export interface DailyWeather {
  summary: string;
  conclusion: string;
  ok: boolean;
}

// Fuengirolan koordinaatit
const FUENGIROLA_LAT = 36.54;
const FUENGIROLA_LON = -4.62;

// WMO Weather interpretation codes -> suomenkielinen kuvaus
const weatherCodeDescriptions: Record<number, string> = {
  0: 'selkeää',
  1: 'pääosin selkeää',
  2: 'puolipilvistä',
  3: 'pilvistä',
  45: 'sumuista',
  48: 'sumuista',
  51: 'tihkusadetta',
  53: 'tihkusadetta',
  55: 'tihkusadetta',
  61: 'sadetta',
  63: 'sadetta',
  65: 'voimakasta sadetta',
  80: 'sadekuuroja',
  81: 'sadekuuroja',
  82: 'voimakkaita kuuroja',
  95: 'ukkosia',
  96: 'ukkosia',
  99: 'voimakkaita ukkosia',
};

function getWeatherDescription(code: number): string {
  return weatherCodeDescriptions[code] || 'vaihtelevaa';
}

function generateConclusion(tempMax: number, weatherCode: number): string {
  // Sadekoodi
  if (weatherCode >= 51) {
    return 'Varaa sateenvarjo mukaan.';
  }

  // Lämpötilan mukaan
  if (tempMax >= 30) {
    return 'Vältä keskipäivän kuumuutta, aamu ja ilta parhaita ulkoiluun.';
  }
  if (tempMax >= 25) {
    return 'Aamupäivä paras ulkoiluun.';
  }
  if (tempMax >= 18) {
    return 'Miellyttävä päivä ulkoiluun.';
  }
  return 'Ota kevyt takki mukaan.';
}

export async function getDailyWeather(city: string): Promise<DailyWeather> {
  // Fallback-arvot
  const fallback: DailyWeather = {
    summary: 'Säätietoja ei saatu.',
    conclusion: 'Suunnittele päivä joustavasti.',
    ok: false,
  };

  try {
    // Open-Meteo API - haetaan päivän ennuste
    const url = new URL('https://api.open-meteo.com/v1/forecast');
    url.searchParams.set('latitude', FUENGIROLA_LAT.toString());
    url.searchParams.set('longitude', FUENGIROLA_LON.toString());
    url.searchParams.set('daily', 'weather_code,temperature_2m_max,temperature_2m_min');
    url.searchParams.set('timezone', 'Europe/Madrid');
    url.searchParams.set('forecast_days', '1');

    const response = await fetch(url.toString());

    if (!response.ok) {
      return fallback;
    }

    const data = await response.json();

    if (!data.daily || !data.daily.weather_code || !data.daily.temperature_2m_max) {
      return fallback;
    }

    const weatherCode = data.daily.weather_code[0];
    const tempMax = Math.round(data.daily.temperature_2m_max[0]);
    const tempMin = Math.round(data.daily.temperature_2m_min[0]);

    const description = getWeatherDescription(weatherCode);
    const summary = `Päivä on ${description}, ${tempMax} °C.`;
    const conclusion = generateConclusion(tempMax, weatherCode);

    return {
      summary,
      conclusion,
      ok: true,
    };
  } catch {
    return fallback;
  }
}

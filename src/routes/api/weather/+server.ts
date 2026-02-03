import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import {
  type DailyWeather,
  FALLBACK_WEATHER,
  parseAemetDescription,
  generateConclusion,
} from '$lib/lomasihteeri/weather';
import { env } from '$env/dynamic/private';

// Fuengirola kuntakoodi AEMET:ssa
const FUENGIROLA_MUNICIPIO = '29054';

// AEMET OpenData API base
const AEMET_BASE_URL = 'https://opendata.aemet.es/opendata/api';

export const GET: RequestHandler = async ({ fetch }) => {
  const apiKey = env.AEMET_API_KEY;

  // Jos API-avainta ei ole, palauta fallback
  if (!apiKey) {
    return json(FALLBACK_WEATHER);
  }

  try {
    // Vaihe 1: Hae datan URL AEMET:sta
    const metaUrl = `${AEMET_BASE_URL}/prediccion/especifica/municipio/diaria/${FUENGIROLA_MUNICIPIO}`;
    const metaResponse = await fetch(metaUrl, {
      headers: {
        'api_key': apiKey,
        'Accept': 'application/json',
      },
    });

    if (!metaResponse.ok) {
      return json(FALLBACK_WEATHER);
    }

    const metaData = await metaResponse.json();

    if (!metaData.datos) {
      return json(FALLBACK_WEATHER);
    }

    // Vaihe 2: Hae varsinainen säädata URL:sta
    const dataResponse = await fetch(metaData.datos);

    if (!dataResponse.ok) {
      return json(FALLBACK_WEATHER);
    }

    const weatherData = await dataResponse.json();

    if (!Array.isArray(weatherData) || weatherData.length === 0) {
      return json(FALLBACK_WEATHER);
    }

    const forecast = weatherData[0];

    if (!forecast.prediccion || !forecast.prediccion.dia || forecast.prediccion.dia.length === 0) {
      return json(FALLBACK_WEATHER);
    }

    // Hae tämän päivän ennuste
    const today = forecast.prediccion.dia[0];

    // Lämpötila (maxima)
    let tempMax = 25; // default
    if (today.temperatura && today.temperatura.maxima !== undefined) {
      tempMax = parseInt(today.temperatura.maxima, 10);
    }

    // Sään kuvaus (estadoCielo)
    let estadoCielo = 'vaihtelevaa';
    if (today.estadoCielo && Array.isArray(today.estadoCielo)) {
      // Ota keskipäivän kuvaus (periodo 12-24 tai yleisin)
      const midday = today.estadoCielo.find(
        (e: { periodo?: string; descripcion?: string }) =>
          e.periodo === '12-24' || e.periodo === '00-24'
      );
      if (midday && midday.descripcion) {
        estadoCielo = midday.descripcion;
      } else if (today.estadoCielo[0]?.descripcion) {
        estadoCielo = today.estadoCielo[0].descripcion;
      }
    }

    const description = parseAemetDescription(estadoCielo);
    const summary = `Päivä on ${description}, ${tempMax} °C.`;
    const conclusion = generateConclusion(tempMax, description);

    const result: DailyWeather = {
      summary,
      conclusion,
      ok: true,
      source: 'aemet',
    };

    return json(result);
  } catch {
    return json(FALLBACK_WEATHER);
  }
};

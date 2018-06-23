import { StartFetch, ResolveFetch, RejectFetch } from '../constants/weather';
import { WeatherReport } from '../services/weather/weather-report';

export function startFetch (): StartFetch {
  return { type: 'WEATHER_FETCH' }
}

export function successFetch (report: WeatherReport): ResolveFetch {
  console.log(report)
  return { type: 'WEATHER_FETCH_RESOLVE', report }
}

export function failedFetch (rejection: any): RejectFetch {
  return { type: 'WEATHER_FETCH_REJECT', rejection }
}

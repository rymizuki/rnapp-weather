import { StartFetch, ResolveFetch, RejectFetch } from '../constants/weather';

export function startFetch (): StartFetch {
  return { type: 'WEATHER_FETCH' }
}

export function successFetch (): ResolveFetch {
  return { type: 'WEATHER_FETCH_RESOLVE' }
}

export function failedFetch (): RejectFetch {
  return { type: 'WEATHER_FETCH_REJECT' }
}

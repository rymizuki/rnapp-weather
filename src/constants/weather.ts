import { WeatherReport } from "../services/weather/weather-report";

export interface StartFetch {
  type: 'WEATHER_FETCH',
}

export interface ResolveFetch {
  type: 'WEATHER_FETCH_RESOLVE',
  report: WeatherReport
}

export interface RejectFetch {
  type: 'WEATHER_FETCH_REJECT',
  rejection: any
}

export type WeatherActions = StartFetch | ResolveFetch | RejectFetch

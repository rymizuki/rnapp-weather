export interface StartFetch {
  type: 'WEATHER_FETCH',
}

export interface ResolveFetch {
  type: 'WEATHER_FETCH_RESOLVE',
}

export interface RejectFetch {
  type: 'WEATHER_FETCH_REJECT',
}

export type WeatherActions = StartFetch | ResolveFetch | RejectFetch

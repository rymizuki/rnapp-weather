export interface WeatherState {
  loading: boolean,
  report: {
    weather: {
      main: string,
      description: string,
      icon: string
    },
    temperature: {
      current: number,
      min: number,
      max: number
    },
    humidity: number,
    pressure: number
  } | null,
}

export interface RootState {
  weather: WeatherState
}
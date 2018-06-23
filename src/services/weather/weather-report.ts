export class WeatherReport {
  weather: WeatherReportWeather
  temperature: WeatherReportTemperature
  humidity: number
  pressure: number
  constructor (
    weather: WeatherReportWeather,
    temperature: WeatherReportTemperature,
    humidity: number,
    pressure: number
  ) {
    this.weather = weather
    this.temperature = temperature
    this.humidity = humidity
    this.pressure = pressure
  }
}

export class WeatherReportWeather {
  main: string
  description: string
  icon: string
  constructor (main: string, description: string, icon: string) {
    this.main = main
    this.description = description
    this.icon = icon
  }
}

export class WeatherReportTemperature {
  current: number
  min: number
  max: number
  constructor (current: number, min: number, max: number) {
    this.current = current
    this.min = min
    this.max = max
  }
}

export default function ({ weather, main }: any): WeatherReport {
  return new WeatherReport(
    new WeatherReportWeather(
      weather.main,
      weather.description,
      weather.icon
    ),
    new WeatherReportTemperature(
      main.temp,
      main.temp_min,
      main.temp_max,
    ),
    main.humidity,
    main.pressure,
  )
}

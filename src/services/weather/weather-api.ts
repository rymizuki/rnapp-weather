import * as qs from 'qs'
import axios from 'axios'
import buildReport, { WeatherReport } from './weather-report'
import buildForecast, { WeatherForecast } from './weather-forecast'

export class WeatherApi {
  readonly baseUri: string = 'http://api.openweathermap.org/data/2.5'
  private apiKey: string
  constructor (apiKey: string) {
    this.apiKey = apiKey
  }
  async fetch (path: string, q: string): Promise<any> {
    const params = {
      q,
      APPID: this.apiKey,
      units: 'metric',
    }

    try {
      const query = qs.stringify(params)
      const uri = `${ this.baseUri }${ path }?${ query }`
      const data = await axios.get(uri)
        .then((res: any) => {
          return res.data
        })

      return data
    } catch (err) {
      throw err
    }
  }
  async fetchToday (city: string): Promise<WeatherReport> {
    try {
      const data: any = await this.fetch('/weather', city)
      const report: WeatherReport = buildReport(data)
      return report
    } catch (err) {
      throw err
    }
  }
  async fetchForecast (city: string): Promise<Array<WeatherForecast>> {
    try {
      const data: any = await this.fetch('/forecast', city)
      const forecasts: Array<WeatherForecast> = data.list.map((data: any) => {
        return buildForecast(data)
      })
      return forecasts
    } catch (err) {
      throw err
    }
  }
}

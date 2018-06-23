import { WeatherApi } from './weather-api'

const apiKey = '64574b4d9cabca3f2e114cbf19ef90c5'

export class Weather {
  private client: WeatherApi
  constructor (apiKey: string) {
    this.client = new WeatherApi(apiKey)
  }
  async getToday () {
    const city = 'Shinagawa, JP'

    try {
      return await this.client.fetchToday(city)
    } catch (err) {
      throw err
    }
  }
}

export default new Weather(apiKey)

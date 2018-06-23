import { WeatherReport } from './weather-report';
import buildReport from './weather-report';

export class WeatherForecast {
  timestamp: number
  report: WeatherReport
  constructor (timestamp: number, report: WeatherReport) {
    this.timestamp = timestamp
    this.report = report
  }
}

export default function build ({ dt, weather, main }: any): WeatherForecast {
  return new WeatherForecast(
    dt,
    buildReport({ weather, main }),
  )
}


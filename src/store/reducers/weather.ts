import { WeatherActions } from "../../constants/weather";
import { WeatherState } from "../state";

export default (state = {}, action: WeatherActions): WeatherState => {
  switch (action.type) {
    case 'WEATHER_FETCH':
      return Object.assign({}, state, {
        loading: true,
        report: null,
      })
    case 'WEATHER_FETCH_RESOLVE':
      return Object.assign({}, state, {
        loading: false,
        report: {
          weather: {
            main: action.report.weather.main,
            description: action.report.weather.description,
            icon: action.report.weather.icon,
          },
          temperature: {
            current: action.report.temperature.current,
            min: action.report.temperature.min,
            max: action.report.temperature.max,
          },
          humidity: action.report.humidity,
          pressure: action.report.pressure
        },
      })
    case 'WEATHER_FETCH_REJECT':
      return Object.assign({}, state, {
        loading: false,
        report: null,
      })
    default:
      return state as WeatherState
  }
}

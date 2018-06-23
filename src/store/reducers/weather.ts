import { WeatherActions } from "../../constants/weather";

export default (state = {}, action: WeatherActions) => {
  console.log('state', action)

  switch (action.type) {
    default:
      return state
  }
}
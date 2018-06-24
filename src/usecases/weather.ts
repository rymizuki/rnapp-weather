import { Dispatch } from 'redux';
import {
  startFetch,
  successFetch,
  failedFetch
} from '../actions/weather'
import weather from '../services/weather/index'

// XXX: 用途が違うので異なるActionを発行すべきだが、めんどくさいので一旦このまま
export function fetch (dispatch: Dispatch) {
  dispatch(startFetch())
  weather.getToday()
    .then((report) => {
      dispatch(successFetch(report))
    })
    .catch((error) => {
      dispatch(failedFetch(error))
    })
}

export const load = (dispatch: Dispatch) => {
  return () => fetch(dispatch)
}

export const reload = (dispatch: Dispatch) => {
  return () => fetch(dispatch)
}

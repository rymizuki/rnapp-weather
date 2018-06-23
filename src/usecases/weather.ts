import { Dispatch } from 'redux';
import {
  startFetch,
  successFetch,
  failedFetch
} from '../actions/weather'
import weather from '../services/weather/index'

export function fetch (dispatch: Dispatch) {
  dispatch(startFetch())
  weather.getToday()
    .then((report) => {
      console.log('usecase.getToday', report)
      dispatch(successFetch(report))
    })
    .catch((error) => {
      dispatch(failedFetch(error))
    })
}

import { Dispatch } from 'redux';
import {
  startFetch,
  successFetch,
  failedFetch
} from '../actions/weather'
import weather from '../services/weather'

export function fetch (dispatch: Dispatch) {
  dispatch(startFetch())
  weather.fetch()
    .then(() => {
      dispatch(successFetch())
    })
    .catch(() => {
      dispatch(failedFetch())
    })
}

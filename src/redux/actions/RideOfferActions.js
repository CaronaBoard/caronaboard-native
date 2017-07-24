import { FETCH_ALL_RIDES } from '../types'
import { getAllRides } from '../../services/firebase'

export function fetchAllRides () {
  return async (dispatch) => {
    const rides = await getAllRides()
    const action = {
      type: FETCH_ALL_RIDES,
      payload: rides
    }

    dispatch(action)
  }
}

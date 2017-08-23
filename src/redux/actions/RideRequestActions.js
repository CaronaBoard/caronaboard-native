import { FETCH_ALL_RIDES_REQUEST } from '../types'
import { getAllRideRequests } from '../../services/firebase'

export function fetchAllRideRequests () {
  return async (dispatch) => {
    const rides = await getAllRideRequests()
    const action = {
      type: FETCH_ALL_RIDES_REQUEST,
      payload: rides
    }

    dispatch(action)
  }
}

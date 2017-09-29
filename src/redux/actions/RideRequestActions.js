import { FETCH_ALL_RIDE_REQUESTS } from '../types'
import { getAllRideRequests } from '../../services/firebase'

export function fetchAllRideRequests () {
  return async (dispatch) => {
    const rides = await getAllRideRequests()
    const action = {
      type: FETCH_ALL_RIDE_REQUESTS,
      payload: rides
    }

    dispatch(action)
  }
}

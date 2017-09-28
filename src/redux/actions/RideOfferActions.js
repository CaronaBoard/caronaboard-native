import { FETCH_ALL_RIDES } from '../types'
import { getAllRideOffers } from '../../services/firebase'

export function fetchAllRides () {
  return async (dispatch) => {
    const rides = await getAllRideOffers()
    const action = {
      type: FETCH_ALL_RIDES,
      payload: rides
    }

    dispatch(action)
  }
}

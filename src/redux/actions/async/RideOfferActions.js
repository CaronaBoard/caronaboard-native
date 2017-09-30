import { FETCH_ALL_RIDE_OFFERS } from '../../types'
import { getAllRideOffers } from '../../../services/firebase'

export function fetchAllRideOffers () {
  return async (dispatch) => {
    const rides = await getAllRideOffers()
    const action = {
      type: FETCH_ALL_RIDE_OFFERS,
      payload: rides
    }

    dispatch(action)
  }
}

import { getAllRideOffers } from '../../../services/firebase'
import { updateRideOffers } from '../sync/RideOfferActions'

export function fetchAllRideOffers () {
  return async (dispatch) => {
    const rides = await getAllRideOffers()
    const action = updateRideOffers(rides)
    dispatch(action)
  }
}

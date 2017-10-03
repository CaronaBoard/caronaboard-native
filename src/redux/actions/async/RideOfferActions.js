import { getAllRideOffers, getUserRideOffers } from '../../../services/firebase'
import { updateRideOffers, updateYourRideOffers } from '../sync/RideOfferActions'

export function fetchAllRideOffers () {
  return async (dispatch) => {
    const rides = await getAllRideOffers()
    const action = updateRideOffers(rides)
    dispatch(action)
  }
}

export function fetchYourRideOffers (uid: string) {
  return async (dispatch) => {
    const rides = await getUserRideOffers(uid)
    const action = updateYourRideOffers(rides)
    dispatch(action)
  }
}

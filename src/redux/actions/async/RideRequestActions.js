import { updateYourRideRequests } from '../sync/RideRequestActions'
import { getUserRideRequests, removeDuplicatedRequests } from '../../../services/firebase/database/RideRequest'
import { findRideOfferById } from '../../../services/firebase/database/RideOffer'

export function fetchYourRideRequests (uid: string) {
  return async (dispatch) => {
    const rideRequests = await getUserRideRequests(uid)
    const rideRequestsMap = await removeDuplicatedRequests(rideRequests)
    const rideOffersPromises = rideRequests.map(({ rideId }) => findRideOfferById(rideId))
    const rides = await Promise.all(rideOffersPromises)
    const action = updateYourRideRequests(rides, rideRequestsMap)
    dispatch(action)
  }
}

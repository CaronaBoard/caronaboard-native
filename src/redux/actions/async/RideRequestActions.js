import { getAllRideRequests } from '../../../services/firebase'
import { updateYourRideRequests } from '../sync/RideRequestActions'

export function fetchAllRideRequests () {
  return async (dispatch) => {
    const rides = await getAllRideRequests()
    const action = updateYourRideRequests(rides)
    dispatch(action)
  }
}

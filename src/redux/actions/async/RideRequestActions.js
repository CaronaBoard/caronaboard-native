import { getAllRideRequests } from '../../../services/firebase'
import { updateRideRequests } from '../sync/RideRequestActions'

export function fetchAllRideRequests () {
  return async (dispatch) => {
    const rides = await getAllRideRequests()
    const action = updateRideRequests(rides)
    dispatch(action)
  }
}

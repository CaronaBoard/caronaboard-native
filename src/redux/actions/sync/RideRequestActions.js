import { UPDATE_RIDE_REQUESTS } from '../../types/index'
import type { RideRequestFlowType, RideRequestIdMapFlowType } from '../../../services/firebase/types'

export const updateYourRideRequests = (rides: Array<RideRequestFlowType>, rideRequestsMap: RideRequestIdMapFlowType) => {
  return {
    type: UPDATE_RIDE_REQUESTS,
    requests: rides,
    requestsIdMap: rideRequestsMap
  }
}

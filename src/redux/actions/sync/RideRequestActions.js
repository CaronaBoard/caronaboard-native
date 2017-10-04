import { UPDATE_RIDE_REQUESTS } from '../../types/index'
import type { GroupType, RideRequestFlowType, RideRequestIdMapFlowType } from '../../../services/firebase/types'
import { UPDATE_RIDE_GROUP } from '../../types/RideOfferTypes'

export const updateYourRideRequests = (rides: Array<RideRequestFlowType>, rideRequestsMap: RideRequestIdMapFlowType) => {
  return {
    type: UPDATE_RIDE_REQUESTS,
    requests: rides,
    requestsIdMap: rideRequestsMap
  }
}

export const updateRideGroup = (group: GroupType) => {
  return {
    type: UPDATE_RIDE_GROUP,
    group
  }
}

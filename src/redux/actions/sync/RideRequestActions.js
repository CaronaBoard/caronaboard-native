import { FETCH_ALL_RIDE_REQUESTS } from '../../types/index'

export const updateRideRequests = (rides) => {
  return {
    type: FETCH_ALL_RIDE_REQUESTS,
    payload: rides
  }
}

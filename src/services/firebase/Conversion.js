// @flow

import _ from 'lodash'
import type { RideType, RideOfferType, RideRequestFlowType, FirebaseRideRequests } from './types'

export const toArrayOfRides = (firebaseResponse: any): RideType => {
  return _.flatMap(firebaseResponse, (value, driverId) => {
    const ridesIds = Object.keys(value)
    const rides = Object.values(value)

    rides.forEach((ride, index) => {
      ride.driverId = driverId
      ride.rideId = ridesIds[index]
    })

    return rides
  })
}

export const toArrayOfRideRequests = (firebaseResponse: FirebaseRideRequests): RideRequestFlowType => {
  return _.flatMap(firebaseResponse, (value, rideId) => {
    const requestIds = Object.keys(value)
    const rideRequests = Object.values(value)

    rideRequests.forEach((ride, index) => {
      ride.rideId = rideId
      ride.requestId = requestIds[index]
    })

    return rideRequests
  })
}

export const toRideOffer = (ride: RideType): RideOfferType => {
  const { days, destination, hours, origin, rideId } = ride
  return { days, destination, hours, origin, id: rideId }
}

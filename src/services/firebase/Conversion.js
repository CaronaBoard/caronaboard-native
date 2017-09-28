// @flow

import _ from 'lodash'
import type { rideType } from './types'

export const toArrayOfRides = (firebaseResponse: any): rideType => {
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

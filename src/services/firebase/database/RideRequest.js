// @flow

import Firebase from 'firebase'
import { toArrayOfRides } from '../Conversion'
import { getUserProfile } from './Profile'
import type { rideType } from '../types'
import { rideGroup } from './'

export const saveRideRequest = async (rideId: string, userId: string) => {
  const profile = await getUserProfile(userId)

  return Firebase.database()
    .ref(`ridesRequests/${rideGroup}/${rideId}`)
    .push({profile})
}

export const getAllRideRequests = async (): Array<rideType> => {
  const rideRequests = await Firebase.database()
    .ref(`ridesRequests/${rideGroup}`)
    .child(rideGroup)
    .once('value')

  return toArrayOfRides(rideRequests.val())
}

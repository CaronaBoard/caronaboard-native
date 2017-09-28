// @flow

import Firebase from 'firebase'
import { toArrayOfRideRequests } from '../Conversion'
import { getUserProfile } from './Profile'
import type { rideRequestFlowType } from '../types'
import type { profileFlowType } from './Profile'
import { rideGroup } from './'

export const saveRideRequest = async (rideId: string, userId: string) => {
  const profile = await getUserProfile(userId)

  return Firebase.database()
    .ref(`ridesRequests/${rideGroup}/${rideId}`)
    .push({profile})
}

export const updateRideRequest = async (rideRequest: rideRequestFlowType, profile: profileFlowType) => {
  console.log(rideRequest, 'is ===> rideRequest')
  console.log(profile, 'is ===> profile')
  const { rideId, requestId } = rideRequest
  await Firebase.database()
    .ref(`ridesRequests/${rideId}/${requestId}`)
    .update(profile)
}

export const getAllRideRequests = async (): Array<rideRequestFlowType> => {
  const rideRequests = await Firebase.database()
    .ref('ridesRequests')
    .child(rideGroup)
    .once('value')

  return toArrayOfRideRequests(rideRequests.val())
}

export const getUserRideRequests = async (userId: string): Array<rideRequestFlowType> => {
  const rides = await getAllRideRequests()
  return rides.filter(ride => ride.driverId === userId)
}

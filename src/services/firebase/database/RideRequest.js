// @flow

import Firebase from 'firebase'
import { toArrayOfRideRequests } from '../Conversion'
import { getUserProfile } from './Profile'
import type { rideRequestFlowType, profileFlowType } from '../types'
import { rideGroup } from './'

export const saveRideRequest = async (rideId: string, userId: string) => {
  const profile = await getUserProfile(userId)

  return Firebase.database()
    .ref(`ridesRequests/${rideGroup}/${rideId}`)
    .push({profile})
}

export const updateRideRequest = async (rideRequest: rideRequestFlowType, profile: profileFlowType) => {
  const { rideId, requestId } = rideRequest
  await Firebase.database()
    .ref(`ridesRequests/${rideGroup}/${rideId}/${requestId}/profile`)
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
  return rides.filter(ride => ride.profile.uid === userId)
}

export const removeRideRequest = async (ride: rideRequestFlowType) => {
  return Firebase.database()
    .ref(`ridesRequests/${rideGroup}/${ride.rideId}/${ride.requestId}`)
    .remove()
}

export const removeDuplicatedRequests = async (rides: Array<rideRequestFlowType>)
                                              : {[rideId: string]: rideRequestFlowType} => {
  let rideRequestsMap = {}
  let promiseArray = []

  rides.forEach(ride => {
    rideRequestsMap[ride.rideId] ? promiseArray.push(removeRideRequest(ride))
                     : rideRequestsMap[ride.rideId] = ride
  })

  await Promise.all(promiseArray)

  return rideRequestsMap
}

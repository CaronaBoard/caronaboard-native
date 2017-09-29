// @flow

import { toArrayOfRideRequests } from '../Conversion'
import { getUserProfile } from './Profile'
import type { rideRequestFlowType, profileFlowType } from '../types'
import { rideGroup, ref } from './'

export const saveRideRequest = async (rideId: string, userId: string) => {
  const profile = await getUserProfile(userId)
  const path = `ridesRequests/${rideGroup}/${rideId}`
  return ref(path).push({profile})
}

export const updateRideRequest = async (rideRequest: rideRequestFlowType, profile: profileFlowType) => {
  const { rideId, requestId } = rideRequest
  const path = `ridesRequests/${rideGroup}/${rideId}/${requestId}/profile`
  await ref(path).update(profile)
}

export const getAllRideRequests = async (): Array<rideRequestFlowType> => {
  const rideRequests = await ref('ridesRequests').child(rideGroup).once('value')
  return toArrayOfRideRequests(rideRequests.val())
}

export const getUserRideRequests = async (userId: string): Array<rideRequestFlowType> => {
  const rides = await getAllRideRequests()
  return rides.filter(ride => ride.profile.uid === userId)
}

export const removeRideRequest = async (ride: rideRequestFlowType) => {
  const path = `ridesRequests/${rideGroup}/${ride.rideId}/${ride.requestId}`
  return ref(path).remove()
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

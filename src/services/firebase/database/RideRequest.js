// @flow

import { toArrayOfRideRequests } from '../Conversion'
import { getUserProfile } from './Profile'
import type { RideRequestFlowType, ProfileType } from '../types'
import { rideGroup, ref } from './'

export const saveRideRequest = async (rideId: string, userId: string) => {
  const profile = await getUserProfile(userId)
  const path = `ridesRequests/${rideGroup}/${rideId}`
  return ref(path).push({profile})
}

export const updateRideRequest = async (rideRequest: RideRequestFlowType, profile: ProfileType) => {
  const { rideId, requestId } = rideRequest
  const path = `ridesRequests/${rideGroup}/${rideId}/${requestId}/profile`
  await ref(path).update(profile)
}

export const getAllRideRequests = async (): Array<RideRequestFlowType> => {
  const rideRequests = await ref('ridesRequests').child(rideGroup).once('value')
  return toArrayOfRideRequests(rideRequests.val())
}

export const getUserRideRequests = async (userId: string): Array<RideRequestFlowType> => {
  const rides = await getAllRideRequests()
  return rides.filter(ride => ride.profile.uid === userId)
}

export const removeRideRequest = async (ride: RideRequestFlowType) => {
  const path = `ridesRequests/${rideGroup}/${ride.rideId}/${ride.requestId}`
  return ref(path).remove()
}

export const removeDuplicatedRequests = async (rides: Array<RideRequestFlowType>)
                                              : {[rideId: string]: RideRequestFlowType} => {
  let rideRequestsMap = {}
  let promiseArray = []

  rides.forEach(ride => {
    rideRequestsMap[ride.rideId] ? promiseArray.push(removeRideRequest(ride))
                     : rideRequestsMap[ride.rideId] = ride
  })

  await Promise.all(promiseArray)

  return rideRequestsMap
}

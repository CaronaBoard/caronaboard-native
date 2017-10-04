// @flow

import { toArrayOfRides } from '../Conversion'
import _ from 'lodash'
import type { RideType, NewRideOfferType, ProfileType } from '../types'
import { ref } from './'
import { getUserProfile } from './Profile'
import { getActiveGroup } from './Groups'

export const saveRideOffer = async (rideOffer: NewRideOfferType, userId: string) => {
  const rideGroup = getActiveGroup()
  const profile = await getUserProfile(userId)
  const path = `rides/${rideGroup}/${userId}`
  const ride = Object.assign({ profile }, rideOffer)
  return ref(path).push(ride)
}

export const updateRideOffer = async (rideOffer: NewRideOfferType, profile: ProfileType) => {
  const rideGroup = getActiveGroup()
  const path = `rides/${rideGroup}/${profile.uid}/${rideOffer.id}`
  const newRide = Object.assign({profile: profile}, _.omit(rideOffer, 'id'))
  await ref(path).update(newRide)
}

export const removeRideOffer = async (rideId: string, userId: string) => {
  const rideGroup = getActiveGroup()
  const path = `rides/${rideGroup}/${userId}/${rideId}`
  return ref(path).remove()
}

export const getAllRideOffers = async (): Array<RideType> => {
  const rideGroup = getActiveGroup()
  const rides = await ref('rides')
    .child(rideGroup)
    .once('value')

  return toArrayOfRides(rides.val())
}

export const getUserRideOffers = async (userId: string): Array<RideType> => {
  const rides = await getAllRideOffers()
  return rides.filter(ride => ride.driverId === userId)
}

export const findRideOfferById = async (rideId: string): ?RideType => {
  const allRides = await getAllRideOffers()
  return allRides.filter(ride => ride.rideId === rideId).shift()
}

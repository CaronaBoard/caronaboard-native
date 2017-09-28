// @flow

import Firebase from 'firebase'
import { toArrayOfRides } from '../Conversion'
import _ from 'lodash'
import type { rideType, rideOfferType } from '../types'
import { rideGroup } from './'
import { getUserProfile } from './Profile'
import type { profileFlowType } from './Profile'

export const saveRideOffer = async (rideOffer: rideOfferType, userId: string) => {
  const profile = await getUserProfile(userId)

  return Firebase.database()
    .ref(`rides/${rideGroup}/${userId}`)
    .push(Object.assign({ profile }, rideOffer))
}

export const updateRideOffer = async (rideOffer: rideOfferType, userId: string, profile?: profileFlowType) => {
  if (!profile) {
    profile = await getUserProfile(userId)
  }

  let pathsToUpdate = {}
  pathsToUpdate[`rides/${rideGroup}/${userId}/${rideOffer.id}`] = Object.assign({profile: profile}, _.omit(rideOffer, 'id'))

  await Firebase.database().ref().update(pathsToUpdate)

  return rideOffer
}

export const removeRideOffer = async (rideId: string, userId: string) => {
  return Firebase.database()
    .ref(`rides/${rideGroup}/${userId}/${rideId}`)
    .remove()
}

export const getAllRideOffers = async (): Array<rideType> => {
  const rides = await Firebase.database()
    .ref('rides')
    .child(rideGroup)
    .once('value')

  return toArrayOfRides(rides.val())
}

export const getUserRideOffers = async (userId: string) => {
  const rides = await getAllRideOffers()
  return rides.filter(ride => ride.driverId === userId)
}

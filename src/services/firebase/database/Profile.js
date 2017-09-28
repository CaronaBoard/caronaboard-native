// @flow

import Firebase from 'firebase'
import { getUserRideOffers, updateRideOffer } from './RideOffer'
import { getUserRideRequests, updateRideRequest } from './RideRequest'
import { toRideOffer } from '../Conversion'
import type { profileFlowType } from '../types'

export const saveProfile = async (profile: profileFlowType) => {
  try {
    await Firebase.database().ref(`profiles/${profile.uid}`).update(profile)

    Promise.all([
      updateUserProfileOnRideOffers(profile),
      updateUserProfileOnRideRequests(profile)
    ])
  } catch (error) {
    console.error(error)
  }
}

export const getUserProfile = async (userId: string): profileFlowType => {
  const profileSnapshot = await Firebase.database()
    .ref(`profiles/${userId}`)
    .once('value')

  const profile = profileSnapshot.val()

  if (!profile) {
    throw (new Error('Usuário nāo preencheu o perfil'))
  }

  return profile
}

const updateUserProfileOnRideOffers = async (profile: profileFlowType) => {
  const userRideOffers = await getUserRideOffers(profile.uid)
  const ridesToUpdate = userRideOffers.map(ride => updateRideOffer(toRideOffer(ride), profile))
  Promise.all(ridesToUpdate)
}

const updateUserProfileOnRideRequests = async (profile: profileFlowType) => {
  const userRideOffers = await getUserRideRequests(profile.uid)
  const ridesToUpdate = userRideOffers.map(ride => updateRideRequest(ride, profile))
  Promise.all(ridesToUpdate)
}

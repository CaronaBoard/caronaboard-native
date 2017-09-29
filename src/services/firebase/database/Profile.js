// @flow

import { ref } from './'
import { getUserRideOffers, updateRideOffer } from './RideOffer'
import { getUserRideRequests, updateRideRequest } from './RideRequest'
import { toRideOffer } from '../Conversion'
import type { ProfileType } from '../types'

export const saveProfile = async (profile: ProfileType) => {
  try {
    const path = `profiles/${profile.uid}`
    await ref(path).update(profile)

    await Promise.all([
      updateUserProfileOnRideOffers(profile),
      updateUserProfileOnRideRequests(profile)
    ])
  } catch (error) {
    console.error(error)
  }
}

export const getUserProfile = async (userId: string): ProfileType => {
  const path = `profiles/${userId}`
  const profileSnapshot = await ref(path).once('value')
  const profile = profileSnapshot.val()

  if (!profile) {
    throw (new Error('Usuário nāo preencheu o perfil'))
  }

  return profile
}

const updateUserProfileOnRideOffers = async (profile: ProfileType) => {
  const userRideOffers = await getUserRideOffers(profile.uid)
  const ridesToUpdate = userRideOffers.map(ride => updateRideOffer(toRideOffer(ride), profile))
  await Promise.all(ridesToUpdate)
}

const updateUserProfileOnRideRequests = async (profile: ProfileType) => {
  const userRideOffers = await getUserRideRequests(profile.uid)
  const ridesToUpdate = userRideOffers.map(ride => updateRideRequest(ride, profile))
  await Promise.all(ridesToUpdate)
}

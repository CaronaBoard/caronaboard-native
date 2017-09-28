// @flow

import Firebase from 'firebase'
import { getUserRideOffers, updateRideOffer } from './RideOffer'
import { toRideOffer } from '../Conversion'

export type profileFlowType = {
  name: string,
  contact: {
    kind: string,
    value: string
  }
}

export const saveProfile = async (profile: profileFlowType, userId: string) => {
  try {
    await Firebase.database().ref(`profiles/${userId}`).update(profile)

    updateUserProfileOnRideOffers(profile, userId)
    updateUserProfileOnRideRequests(profile, userId)
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

const updateUserProfileOnRideOffers = async (profile: profileFlowType, userId: string) => {
  const userRideOffers = await getUserRideOffers(userId)
  userRideOffers.forEach(async ride => {
    await updateRideOffer(toRideOffer(ride), userId, profile)
  })
}

const updateUserProfileOnRideRequests = (profile: profileFlowType, userId: string) => {
  console.log('===> profile is: ', profile)
}

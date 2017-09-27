import Firebase from 'firebase'
import { toArrayOfRides } from './Conversion'
import _ from 'lodash'
const rideGroup = 'twpoa'

type rideOfferType = {
  origin: string,
  destination: string,
  days: string,
  hour: string
}

export const getAllRides = async () => {
  const rides = await Firebase.database()
    .ref('rides')
    .child(rideGroup)
    .once('value')

  return toArrayOfRides(rides.val())
}

export const getAllRideRequests = async () => {
  const rideRequests = await Firebase.database()
    .ref(`ridesRequests/${rideGroup}`)
    .child(rideGroup)
    .once('value')

  return toArrayOfRides(rideRequests.val())
}

export const getUserProfile = async (userId: string) => {
  const profileSnapshot = await Firebase.database()
    .ref(`profiles/${userId}`)
    .once('value')

  const profile = profileSnapshot.val()

  if (!profile) {
    throw (new Error('Usuário nāo preencheu o perfil'))
  }

  return profile
}

const getUserUid = async () => {
  return Firebase.auth().currentUser.uid
}

export const saveRideOffer = async (rideOffer: rideOfferType) => {
  const userId = await getUserUid()
  const profile = await getUserProfile(userId)

  Firebase.database()
    .ref(`rides/${rideGroup}/${userId}`)
    .push(Object.assign({ profile }, rideOffer))
}

export const updateRideOffer = async (rideOffer: rideOfferType) => {
  const userId = await getUserUid()
  const profile = await getUserProfile(userId)

  let pathsToUpdate = {}
  pathsToUpdate[`rides/${rideGroup}/${userId}/${rideOffer.id}`] = Object.assign({profile: profile}, _.omit(rideOffer, 'id'))

  await Firebase.database().ref().update(pathsToUpdate)

  return rideOffer
}

export const removeRideOffer = async (rideId) => {
  const userId = await getUserUid()

  return Firebase.database()
    .ref(`rides/${rideGroup}/${userId}/${rideId}`)
    .remove()
}

export const saveRideRequest = async (rideId) => {
  const userId = await getUserUid()
  const profile = await getUserProfile(userId)

  return Firebase.database()
    .ref(`ridesRequests/${rideGroup}/${rideId}`)
    .push({profile})
}

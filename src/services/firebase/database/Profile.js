// @flow

import Firebase from 'firebase'

type profileType = {
  name: string,
  contact: {
    kind: string,
    value: string
  }
}

export const saveProfile = async (profile: profileType, userId: string) => {
  let pathsToUpdate = {}
  pathsToUpdate[`profiles/${userId}`] = profile

  try {
    const updatedProfile = await Firebase.database()
      .ref()
      .update(pathsToUpdate)

    updateUserProfileOnRideOffers(updatedProfile)
    updateUserProfileOnRideRequests(updatedProfile)
  } catch (error) {
    console.error(error)
  }

  return profile
}

export const getUserProfile = async (userId: string): profileType => {
  const profileSnapshot = await Firebase.database()
    .ref(`profiles/${userId}`)
    .once('value')

  const profile = profileSnapshot.val()

  if (!profile) {
    throw (new Error('Usuário nāo preencheu o perfil'))
  }

  return profile
}

const updateUserProfileOnRideOffers = (profile: profileType) => {
  console.log('===> profile is: ', profile)
}

const updateUserProfileOnRideRequests = (profile: profileType) => {
  console.log('===> profile is: ', profile)
}

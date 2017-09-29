// @flow

import Firebase from 'firebase'

export const rideGroup = 'twpoa'

export * from './Profile'
export * from './RideRequest'
export * from './RideOffer'

export const ref = (path: string) => Firebase.database().ref(path)

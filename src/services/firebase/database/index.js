// @flow

export const rideGroup = 'twpoa'

export * from './Profile'
export * from './RideRequest'
export * from './RideOffer'

let database

export const initializeDatabaseModule = module => {
  database = module
}

export const ref = (path: string) => database.ref(path)

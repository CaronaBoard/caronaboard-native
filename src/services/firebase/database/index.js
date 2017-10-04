// @flow

export * from './Profile'
export * from './RideRequest'
export * from './RideOffer'
export * from './Groups'

let database

export const initializeDatabaseModule = module => {
  database = module
}

export const ref = (path: string) => database.ref(path)

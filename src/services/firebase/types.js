import type { profileFlowType } from './database/Profile'

export type rideType = {
  days: string,
  destination: string,
  hours: string,
  origin: string,
  driverId: string,
  rideId: string,
  profile: {
    name: string,
    contact: {
      kind: string,
      value: string
    }
  }
}

export type rideOfferType = {
  id: string,
  origin: string,
  destination: string,
  days: string,
  hour: string
}

export type rideRequestFlowType = {
  requestId: string,
  rideId: string,
  profile: profileFlowType
}

export type firebaseRideRequests = {
  [rideId: string]: {
    [requestId: string]: {
      profile: profileFlowType
    }
  }
}

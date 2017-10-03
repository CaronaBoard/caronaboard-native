export type ProfileType = {
  name: string,
  uid: string,
  contact: {
    kind: string,
    value: string
  }
}

export type RideType = {
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
      value: string,
      uid: string
    }
  }
}

export type NewRideOfferType = {
  id: string,
  origin: string,
  destination: string,
  days: string,
  hour: string
}

export type RideRequestFlowType = {
  requestId: string,
  rideId: string,
  profile: ProfileType
}

export type UserDataType = {
  uid: string,
  emailVerified: boolean,
  email: string,
  phoneNumber: ?string
}

export type FirebaseRideRequests = {
  [rideId: string]: {
    [requestId: string]: {
      profile: ProfileType
    }
  }
}

export type RideRequestIdMapFlowType = {
  [rideId: string]: RideRequestFlowType
}

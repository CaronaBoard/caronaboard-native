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

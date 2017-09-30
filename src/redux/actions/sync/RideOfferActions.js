import { FETCH_ALL_RIDE_OFFERS } from '../../types'

export const updateRideOffers = (rides) => {
  return {
    type: FETCH_ALL_RIDE_OFFERS,
    payload: rides
  }
}

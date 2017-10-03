import { UPDATE_RIDE_OFFERS, UPDATE_YOUR_RIDE_OFFERS } from '../../types'
import type { RideType } from '../../../services/firebase/types'

export const updateRideOffers = (rides: Array<RideType>) => {
  return {
    type: UPDATE_RIDE_OFFERS,
    offers: rides
  }
}

export const updateYourRideOffers = (rides: Array<RideType>) => {
  return {
    type: UPDATE_YOUR_RIDE_OFFERS,
    yourOffers: rides
  }
}

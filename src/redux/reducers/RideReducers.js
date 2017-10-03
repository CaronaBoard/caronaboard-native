import {
  UPDATE_RIDE_OFFERS,
  UPDATE_YOUR_RIDE_OFFERS,
  UPDATE_RIDE_REQUESTS
} from '../types'
import { UPDATE_RIDE_GROUP } from '../types/RideOfferTypes'

export const INITIAL_STATE = {
  offers: [],
  yourOffers: [],
  requests: [],
  requestsIdMap: {},
  group: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_RIDE_GROUP:
      return { ...state, group: action.group }
    case UPDATE_RIDE_OFFERS:
      return { ...state, offers: action.offers }
    case UPDATE_YOUR_RIDE_OFFERS:
      return { ...state, yourOffers: action.yourOffers }
    case UPDATE_RIDE_REQUESTS:
      const { requests, requestsIdMap } = action
      return { ...state, requests, requestsIdMap }
    default:
      return state
  }
}

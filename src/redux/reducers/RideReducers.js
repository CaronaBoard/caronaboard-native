import {
  UPDATE_RIDE_OFFERS,
  UPDATE_YOUR_RIDE_OFFERS,
  UPDATE_RIDE_REQUESTS
} from '../types'

export const INITIAL_STATE = {
  offers: [],
  yourOffers: [],
  requests: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_RIDE_OFFERS:
      return { ...state, offers: action.offers }
    case UPDATE_YOUR_RIDE_OFFERS:
      return { ...state, yourOffers: action.yourOffers }
    case UPDATE_RIDE_REQUESTS:
      return { ...state, requests: action.requests }
    default:
      return state
  }
}

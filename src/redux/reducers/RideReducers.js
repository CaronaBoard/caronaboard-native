import { FETCH_ALL_RIDE_OFFERS, FETCH_ALL_RIDE_REQUESTS } from '../types'

export const INITIAL_STATE = {
  offers: [],
  requests: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ALL_RIDE_OFFERS:
      return { ...state, offers: action.payload }
    case FETCH_ALL_RIDE_REQUESTS:
      return { ...state, requests: action.payload }
    default:
      return state
  }
}

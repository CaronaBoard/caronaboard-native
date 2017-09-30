import { UPDATE_RIDE_OFFERS, UPDATE_RIDE_REQUESTS } from '../types'

export const INITIAL_STATE = {
  offers: [],
  requests: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_RIDE_OFFERS:
      return { ...state, offers: action.payload }
    case UPDATE_RIDE_REQUESTS:
      return { ...state, requests: action.payload }
    default:
      return state
  }
}

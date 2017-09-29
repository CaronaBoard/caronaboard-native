import { FETCH_ALL_RIDES, FETCH_ALL_RIDES_REQUEST } from '../types'

export const INITIAL_STATE = {
  offers: [],
  requests: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ALL_RIDES:
      return { offers: action.payload }
    case FETCH_ALL_RIDES_REQUEST:
      return { requests: action.payload }
    default:
      return state
  }
}

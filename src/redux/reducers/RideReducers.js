import { FETCH_ALL_RIDES, FETCH_ALL_RIDES_REQUEST } from '../types'

export const INITIAL_STATE = {
  rides: [],
  ridesRequests: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ALL_RIDES:
      return { rides: action.payload }
    case FETCH_ALL_RIDES_REQUEST:
      return { ridesRequests: action.payload }
    default:
      return state
  }
}

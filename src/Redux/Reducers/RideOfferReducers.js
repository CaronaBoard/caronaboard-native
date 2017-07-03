import { FETCH_ALL_RIDES } from '../Types'

export const INITIAL_STATE = {
  rides: []
}

export default (state = INITIAL_STATE, action) => {
  console.log('Action', action)
  switch (action.type) {
    case FETCH_ALL_RIDES:
      return { rides: action.payload }
    default:
      return state
  }
}

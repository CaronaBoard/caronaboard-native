import { SIGN_IN_FIREBASE, SAVE_PROFILE_FIREBASE } from '../types'

export const INITIAL_STATE = {
  userData: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_FIREBASE:
      return { userData: action.payload }
    case SAVE_PROFILE_FIREBASE:
      return { profile: action.payload }
    default:
      return state
  }
}

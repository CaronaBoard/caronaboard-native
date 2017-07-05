import { SIGN_IN_FIREBASE } from '../Types'

export const INITIAL_STATE = {
  userData: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_FIREBASE:
      return { userData: action.payload }
    default:
      return state
  }
}

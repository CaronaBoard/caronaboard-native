import { USER_SIGNED_UP, USER_RESET_PASSWORD } from '../../services/message'
import {
  SIGN_IN_FIREBASE,
  AUTH_FAILED,
  SIGN_UP_SUCCESS,
  SAVE_PROFILE_FIREBASE,
  FORGOT_PASSWORD_SUCCESS
} from '../types'

export const INITIAL_STATE = {
  userData: {},
  alert: {
    showAlert: false,
    message: ''
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_FIREBASE:
      return { ...INITIAL_STATE, userData: action.payload }
    case AUTH_FAILED:
      return { ...state, alert: {showAlert: true, message: action.payload} }
    case SIGN_UP_SUCCESS:
      return { ...state, alert: {showAlert: true, message: USER_SIGNED_UP} }
    case SAVE_PROFILE_FIREBASE:
      return { profile: action.payload }
    case FORGOT_PASSWORD_SUCCESS:
      return { ...state, alert: {showAlert: true, message: USER_RESET_PASSWORD} }
    default:
      return state
  }
}

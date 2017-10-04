import { USER_SIGNED_UP, USER_RESET_PASSWORD } from '../../constants/message'
import {
  UPDATE_USER,
  ALERT_AUTH_FAILED,
  SIGN_UP_SUCCESS,
  UPDATE_PROFILE,
  FORGOT_PASSWORD_SUCCESS
} from '../types'

export const INITIAL_STATE = {
  userData: {
    uid: '',
    emailVerified: false,
    email: '',
    phoneNumber: null
  },
  profile: {
    name: '',
    uid: '',
    contact: {
      kind: '',
      value: ''
    }
  },
  alert: {
    showAlert: false,
    message: ''
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return { ...state, userData: action.payload }
    case UPDATE_PROFILE:
      return { ...state, profile: action.profile }
    case ALERT_AUTH_FAILED:
      return { ...state, alert: {showAlert: true, message: action.payload} }
    case SIGN_UP_SUCCESS:
      return { ...state, alert: {showAlert: true, message: USER_SIGNED_UP} }
    case FORGOT_PASSWORD_SUCCESS:
      return { ...state, alert: {showAlert: true, message: USER_RESET_PASSWORD} }
    default:
      return state
  }
}

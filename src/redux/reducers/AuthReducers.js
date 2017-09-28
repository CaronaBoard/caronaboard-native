import { USER_SIGNED_UP, USER_RESET_PASSWORD } from '../../services/message'
import {
  SIGN_IN_FIREBASE,
  AUTH_FAILED,
  SIGN_UP_SUCCESS,
  SAVE_PROFILE_FIREBASE,
  FORGOT_PASSWORD_SUCCESS
} from '../types'

// TODO: REVERT THIS
export const INITIAL_STATE = {
  userData: {
    uid: 'r9okas9rioSvzy11AycFwue1L063',
    emailVerified: true,
    email: 'eduardomoroni@gmail.com',
    phoneNumber: null
  },
  profile: {
    name: 'Charles Xavies',
    uid: 'r9okas9rioSvzy11AycFwue1L063',
    contact: {
      kind: 'Whatsapp',
      value: '123123213'
    }
  },
  alert: {
    showAlert: false,
    message: ''
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_FIREBASE:
      return { ...INITIAL_STATE, userData: action.payload }
    case SAVE_PROFILE_FIREBASE:
      return { ...state, profile: action.profile }
    case AUTH_FAILED:
      return { ...state, alert: {showAlert: true, message: action.payload} }
    case SIGN_UP_SUCCESS:
      return { ...state, alert: {showAlert: true, message: USER_SIGNED_UP} }
    case FORGOT_PASSWORD_SUCCESS:
      return { ...state, alert: {showAlert: true, message: USER_RESET_PASSWORD} }
    default:
      return state
  }
}

import type { ProfileType } from '../../../services/firebase/database/Profile'
import {
  UPDATE_USER,
  UPDATE_PROFILE,
  SIGN_UP_SUCCESS,
  ALERT_AUTH_FAILED,
  FORGOT_PASSWORD_SUCCESS
} from '../../types'

export const succesRetrievedPassword = () => {
  return {type: FORGOT_PASSWORD_SUCCESS}
}

export const signUpSuccess = () => {
  return {type: SIGN_UP_SUCCESS}
}

export const updateProfile = (profile: ProfileType) => {
  return {type: UPDATE_PROFILE, profile}
}

export const updateUserData = (user) => {
  return {type: UPDATE_USER, payload: user}
}

export const alertAction = (error: {message: string}) => {
  return {type: ALERT_AUTH_FAILED, payload: error.message}
}

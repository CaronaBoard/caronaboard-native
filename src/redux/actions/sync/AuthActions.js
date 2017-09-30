import type { ProfileType } from '../../../services/firebase/database/Profile'
import {
  SIGN_IN_FIREBASE,
  SAVE_PROFILE_FIREBASE,
  SIGN_UP_SUCCESS,
  AUTH_FAILED,
  FORGOT_PASSWORD_SUCCESS
} from '../../types'

export const succesRetrievedPassword = () => {
  return {type: FORGOT_PASSWORD_SUCCESS}
}

export const signUpSuccess = () => {
  return {type: SIGN_UP_SUCCESS}
}

export const updateProfile = (profile: ProfileType) => {
  return {type: SAVE_PROFILE_FIREBASE, profile}
}

export const updateUserData = (user) => {
  return {type: SIGN_IN_FIREBASE, payload: user}
}

export const alertAction = (error: {message: string}) => {
  return {type: AUTH_FAILED, payload: error.message}
}

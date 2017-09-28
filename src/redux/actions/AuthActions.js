import { signIn, signUp, forgotPassword, saveProfile } from '../../services/firebase'
import type { profileType } from '../../services/firebase/database/Profile'
import {
  SIGN_IN_FIREBASE,
  SAVE_PROFILE_FIREBASE,
  SIGN_UP_SUCCESS,
  AUTH_FAILED,
  FORGOT_PASSWORD_SUCCESS
} from '../types'

export function signInFirebase (email: string, password: string) {
  return async (dispatch) => {
    try {
      const user = await signIn(email, password)
      dispatch({ type: SIGN_IN_FIREBASE, payload: user })
    } catch (error) {
      dispatch({ type: AUTH_FAILED, payload: error.message })
    }
  }
}

export function signUpFirebase (email: string, password: string) {
  return async (dispatch) => {
    try {
      await signUp(email, password)
      const successAction = { type: SIGN_UP_SUCCESS }
      dispatch(successAction)
    } catch (error) {
      dispatch({ type: AUTH_FAILED, payload: error.message })
    }
  }
}

export function saveProfileFirebase (profile: profileType, userId: string) {
  return async (dispatch) => {
    try {
      await saveProfile(profile, userId)
      dispatch({ type: SAVE_PROFILE_FIREBASE, profile })
    } catch (err) {
      console.log('Error saving profile: ', err)
    }
  }
}

export function forgotPasswordFirebase (email) {
  return async (dispatch) => {
    try {
      await forgotPassword(email)
      dispatch({ type: FORGOT_PASSWORD_SUCCESS })
    } catch (error) {
      dispatch({ type: AUTH_FAILED, payload: error.message })
    }
  }
}

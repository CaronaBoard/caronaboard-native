import { signIn, signUp, saveProfile, forgotPassword } from '../../services/firebase'
import {
  SIGN_IN_FIREBASE,
  SAVE_PROFILE_FIREBASE,
  SIGN_UP_SUCCESS,
  AUTH_FAILED,
  FORGOT_PASSWORD_SUCCESS
} from '../types'

export function signInFirebase (email, password) {
  return async (dispatch) => {
    try {
      const user = await signIn(email, password)
      dispatch({ type: SIGN_IN_FIREBASE, payload: user })
    } catch (error) {
      dispatch({ type: AUTH_FAILED, payload: error.message })
    }
  }
}

export function signUpFirebase (email, password) {
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

export function saveProfileFirebase (profile) {
  return async (dispatch) => {
    await saveProfile(profile).then(userData => {
      dispatch({ type: SAVE_PROFILE_FIREBASE, payload: userData })
    })
      .catch(err => {
        console.log('Error saving profile: ', err)
      })
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

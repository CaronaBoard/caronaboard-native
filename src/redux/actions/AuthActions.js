import { SIGN_IN_FIREBASE, SAVE_PROFILE_FIREBASE, SIGN_UP_SUCCESS, SIGN_UP_FAILED, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILED } from '../types'
import { signIn, signUp, saveProfile, forgotPassword } from '../../services/firebase'

export function signInFirebase (email, password) {
  return async (dispatch) => {
    try {
      const user = await signIn(email, password)
      const action = {
        type: SIGN_IN_FIREBASE,
        payload: user
      }
      dispatch(action)
    } catch (error) {
      console.log('Error during signIn: ', error)
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
      const failureAction = { type: SIGN_UP_FAILED, payload: error.message }
      dispatch(failureAction)
    }
  }
}

export function saveProfileFirebase (profile) {
  return async (dispatch) => {
    await saveProfile(profile).then(userData => {
      const action = {
        type: SAVE_PROFILE_FIREBASE,
        payload: userData
      }
      dispatch(action)
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
      const successAction = { type: FORGOT_PASSWORD_SUCCESS }
      dispatch(successAction)
    } catch (error) {
      const failureAction = { type: FORGOT_PASSWORD_FAILED, payload: error.message }
      dispatch(failureAction)
    }
  }
}

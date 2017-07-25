import { SIGN_IN_FIREBASE, SAVE_PROFILE_FIREBASE } from '../types'
import { signIn, saveProfile } from '../../services/firebase'

export function signInFirebase (email, password) {
  return async (dispatch) => {
    await signIn(email, password).then(userData => {
      const action = {
        type: SIGN_IN_FIREBASE,
        payload: userData
      }
      dispatch(action)
    })
      .catch(err => {
        console.log('Error loging in: ', err)
      })
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

import { signUp, forgotPassword, saveProfile } from '../../../services/firebase/index'
import { getUserProfile } from '../../../services/firebase/database/Profile'
import type { ProfileType } from '../../../services/firebase/database/Profile'
import { updateProfile,
  alertAction,
  signUpSuccess,
  succesRetrievedPassword,
  updateUserData
} from '../sync/AuthActions'

export function signInFirebase (user) {
  return async (dispatch) => {
    try {
      const profile = await getUserProfile(user.uid)
      dispatch(updateProfile(profile))
      dispatch(updateUserData(user))
    } catch (error) {
      dispatch(alertAction(error))
    }
  }
}

export function signUpFirebase (email: string, password: string) {
  return async (dispatch) => {
    try {
      await signUp(email, password)
      const successAction = signUpSuccess()
      dispatch(successAction)
    } catch (error) {
      dispatch(alertAction(error))
    }
  }
}

export function saveProfileFirebase (profile: ProfileType) {
  return async (dispatch) => {
    try {
      await saveProfile(profile)
      dispatch(updateProfile(profile))
    } catch (err) {
      console.log('Error saving profile: ', err)
    }
  }
}

export function forgotPasswordFirebase (email) {
  return async (dispatch) => {
    try {
      await forgotPassword(email)
      dispatch(succesRetrievedPassword())
    } catch (error) {
      dispatch(alertAction(error))
    }
  }
}

import { SIGN_IN_FIREBASE } from '../Types'
import { signIn } from '../../Services/Firebase'

export function signInFirebase (email, password) {
  return async (dispatch) => {
    const firebaseUser = await signIn(email, password)
    const action = {
      type: SIGN_IN_FIREBASE,
      payload: firebaseUser
    }

    dispatch(action)
  }
}

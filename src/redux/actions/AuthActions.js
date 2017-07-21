import { SIGN_IN_FIREBASE } from '../types'
import { signIn } from '../../services/firebase'

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

import { SIGN_IN_FIREBASE } from '../Types'
import { signIn } from '../../Services/Firebase'

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

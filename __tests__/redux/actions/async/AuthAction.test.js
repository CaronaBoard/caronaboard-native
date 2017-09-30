import {
  SIGN_IN_FIREBASE,
  SIGN_UP_SUCCESS,
  AUTH_FAILED,
  FORGOT_PASSWORD_SUCCESS,
  SAVE_PROFILE_FIREBASE
} from '../../../../src/redux/types/index'
import {
  updateUserData,
  succesRetrievedPassword,
  signUpSuccess,
  alertAction,
  updateProfile
} from '../../../../src/redux/actions/sync/AuthActions'

describe('Auth sync actions', () => {
  it('Should send a update user data action', async () => {
    const userData = {}
    const action = updateUserData(userData)
    const expectedAction = {
      type: SIGN_IN_FIREBASE,
      payload: userData
    }
    expect(action).toEqual(expectedAction)
  })

  it('Should send a update profile action', async () => {
    const profile = {}
    const action = updateProfile(profile)
    const expectedAction = {
      type: SAVE_PROFILE_FIREBASE,
      profile
    }
    expect(action).toEqual(expectedAction)
  })

  it('Should send a sucessfull forgot password action', async () => {
    const expectedAction = {type: FORGOT_PASSWORD_SUCCESS}
    const action = succesRetrievedPassword()
    expect(action).toEqual(expectedAction)
  })

  it('Should send a sucessfull signup action', async () => {
    const expectedAction = {type: SIGN_UP_SUCCESS}
    const action = signUpSuccess()
    expect(action).toEqual(expectedAction)
  })

  it('Should send an alert message', async () => {
    const error = {message: 'Error Message'}
    const action = alertAction(error)
    const expectedAction = {
      type: AUTH_FAILED,
      payload: error.message
    }

    expect(action).toEqual(expectedAction)
  })
})


import {
  UPDATE_USER,
  SIGN_UP_SUCCESS,
  ALERT_AUTH_FAILED,
  FORGOT_PASSWORD_SUCCESS,
  UPDATE_PROFILE
} from '../../../../../src/redux/types/index'
import {
  updateUserData,
  succesRetrievedPassword,
  signUpSuccess,
  alertAction,
  updateProfile
} from '../../../../../src/redux/actions/sync/AuthActions'
import { profileFixture, userDataFixture } from '../../../../resources/fixtures/user'

describe('Auth sync actions', () => {
  it('Should send a update user data action', async () => {
    const action = updateUserData(userDataFixture)
    const expectedAction = {
      type: UPDATE_USER,
      payload: userDataFixture
    }
    expect(action).toEqual(expectedAction)
  })

  it('Should send a update profile action', async () => {
    const action = updateProfile(profileFixture)
    const expectedAction = {
      type: UPDATE_PROFILE,
      profile: profileFixture
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
      type: ALERT_AUTH_FAILED,
      payload: error.message
    }

    expect(action).toEqual(expectedAction)
  })
})

import AuthReducer, { INITIAL_STATE } from '../../../../src/redux/reducers/AuthReducers'
import { signUpFirebase } from '../../../../src/redux/actions/async/AuthActions'
import { USER_SIGNED_UP } from '../../../../src/constants/message'
import { extractActionFromThunk } from '../../../resources/mocks/ReduxThunkMock'
import { signUpSuccess, updateProfile } from '../../../../src/redux/actions/sync/AuthActions'
import * as FirebaseService from '../../../../src/services/firebase'
jest.mock('../../../../src/services/firebase')

describe('AuthReducer', () => {
  it('Should handle successfull sign up', async () => {
    const action = signUpSuccess('email', 'password')
    const state = AuthReducer(INITIAL_STATE, action)
    const expectedState = {
      ...INITIAL_STATE,
      alert: {showAlert: true, message: USER_SIGNED_UP}
    }

    expect(state).toEqual(expectedState)
  })

  it('Should handle error during signup as an alert', async () => {
    const message = 'Error Message'
    FirebaseService.signUp = jest.fn(() => Promise.reject(new Error(message)))

    const action = await extractActionFromThunk(signUpFirebase, 'email', 'password')
    const state = AuthReducer(INITIAL_STATE, action)
    const expectedState = {
      ...state,
      alert: {showAlert: true, message: action.payload}
    }

    expect(state).toEqual(expectedState)
  })

  it('Should update user profile', async () => {
    const profile = {
      name: 'duduzinho',
      contact: {
        kind: 'carta',
        value: 'Rua dos bobos, Numero zero'
      }
    }

    const action = updateProfile(profile)
    const state = AuthReducer(INITIAL_STATE, action)
    const expectedState = { ...state, profile: action.profile }

    expect(state).toEqual(expectedState)
  })
})

import AuthReducer, { INITIAL_STATE } from '../../../src/redux/reducers/AuthReducers'
import { signUpFirebase, saveProfileFirebase } from '../../../src/redux/actions/AuthActions'
import { USER_SIGNED_UP } from '../../../src/services/message'
import { extractActionFromThunk } from '../../__mocks__/ReduxThunkMock'
import * as FirebaseService from '../../../src/services/firebase'

jest.mock('../../../src/services/firebase')

describe('AuthReducer', () => {
  const userId = 'vegeta'

  it('Should handle successfull sign up', async () => {
    FirebaseService.signUp = jest.fn(() => Promise.resolve())

    const action = await extractActionFromThunk(signUpFirebase, 'email', 'password')
    const state = AuthReducer(INITIAL_STATE, action)
    const expectedState = { ...INITIAL_STATE, alert: {showAlert: true, message: USER_SIGNED_UP} }

    expect(state).toEqual(expectedState)
  })

  it('Should handle error during signup as an alert', async () => {
    const message = 'Error Message'
    FirebaseService.signUp = jest.fn(() => Promise.reject(new Error(message)))

    const action = await extractActionFromThunk(signUpFirebase, 'email', 'password')
    const state = AuthReducer(INITIAL_STATE, action)
    const expectedState = { ...state, alert: {showAlert: true, message: action.payload} }

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

    FirebaseService.saveProfile = jest.fn(() => Promise.resolve(profile))

    const action = await extractActionFromThunk(saveProfileFirebase, profile, userId)
    const state = AuthReducer(INITIAL_STATE, action)
    const expectedState = { ...state, profile: action.profile }

    expect(state).toEqual(expectedState)
  })
})

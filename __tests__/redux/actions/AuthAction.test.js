import { SIGN_UP_SUCCESS, AUTH_FAILED, SAVE_PROFILE_FIREBASE } from '../../../src/redux/types'
import { signUpFirebase, saveProfileFirebase } from '../../../src/redux/actions/AuthActions'

import * as FirebaseService from '../../../src/services/firebase'
jest.mock('../../../src/services/firebase')

describe('AuthAction', () => {
  const userId = 'kakaroto'
  const email = 'user@email.com'
  const password = '123456'
  const mockDispatch = jest.fn()

  describe('SignUpFirebase thunk', () => {
    beforeEach(() => {
      mockDispatch.mockClear()
    })

    it('Should handle any exception as a failure action', async () => {
      const message = 'Error Message'
      FirebaseService.signUp = jest.fn(() => Promise.reject(new Error(message)))

      const expectedAction = {
        type: AUTH_FAILED,
        payload: message
      }
      const thunk = signUpFirebase(email, password)
      await thunk(mockDispatch)

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction)
    })

    it('Should dispatch successfull signup action', async () => {
      FirebaseService.signUp = jest.fn(() => Promise.resolve())

      const expectedAction = { type: SIGN_UP_SUCCESS }
      const thunk = signUpFirebase(email, password)
      await thunk(mockDispatch)

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction)
    })

    it('Should dispatch successfull profile save action', async () => {
      const profile = {
        name: 'duduzinho',
        contact: {
          kind: 'carta',
          value: 'Rua dos bobos, Numero zero'
        }
      }
      FirebaseService.saveProfile = jest.fn(() => Promise.resolve())

      const expectedAction = { type: SAVE_PROFILE_FIREBASE, profile }
      const thunk = saveProfileFirebase(profile, userId)
      await thunk(mockDispatch)

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction)
    })
  })
})

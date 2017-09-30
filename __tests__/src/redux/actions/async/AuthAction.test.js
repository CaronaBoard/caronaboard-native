import {
  signUpFirebase,
  saveProfileFirebase
} from '../../../../../src/redux/actions/async/AuthActions'
import {
  alertAction,
  signUpSuccess,
  updateProfile
} from '../../../../../src/redux/actions/sync/AuthActions'

import * as FirebaseService from '../../../../../src/services/firebase/index'
jest.mock('../../../../../src/services/firebase')

describe('Auth async actions', () => {
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

      const expectedAction = alertAction({message})
      const thunk = signUpFirebase(email, password)
      await thunk(mockDispatch)

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction)
    })

    it('Should dispatch successfull signup action', async () => {
      FirebaseService.signUp = jest.fn(() => Promise.resolve())

      const expectedAction = signUpSuccess()
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

      const expectedAction = updateProfile(profile)
      const thunk = saveProfileFirebase(profile, userId)
      await thunk(mockDispatch)

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction)
    })
  })
})

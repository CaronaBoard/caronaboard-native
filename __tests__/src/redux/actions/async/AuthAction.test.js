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
import { profileFixture } from '../../../../resources/fixtures/user/index'
jest.mock('../../../../../src/services/firebase')

describe('Auth async actions', () => {
  const mockDispatch = jest.fn()
  const email = 'user@email.com'
  const password = '123456'

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
      FirebaseService.saveProfile = jest.fn(() => Promise.resolve())

      const expectedAction = updateProfile(profileFixture)
      const thunk = saveProfileFirebase(profileFixture)
      await thunk(mockDispatch)

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction)
    })
  })
})

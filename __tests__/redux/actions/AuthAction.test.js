import { SIGN_UP_SUCCESS, SIGN_UP_FAILED } from '../../../src/redux/types'
import { signUpFirebase } from '../../../src/redux/actions/AuthActions'

import * as FirebaseService from '../../../src/services/firebase'
jest.mock('../../../src/services/firebase')

describe('AuthAction', () => {
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
        type: SIGN_UP_FAILED,
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
  })
})

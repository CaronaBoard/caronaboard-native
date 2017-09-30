import {
  signUp,
  checkEmailRegistration,
  signIn,
  sendVerificationEmail
} from '../../../../src/services/firebase/Authentication'
import RidesResponse from '../../../resources/fixtures/firebase/FirebaseRidesResponse.json'
import { signInWithEmailAndPasswordResponse } from '../../../resources/fixtures/firebase'

let mockFetchProviders = jest.fn()

const mockRef = {
  once: () => Promise.resolve({ val: () => RidesResponse }),
  update: () => Promise.resolve({})
}

const mockDatabase = {
  ref: jest.fn(() => mockRef)
}

const mockCreateUser = jest.fn(() => Promise.resolve(signInWithEmailAndPasswordResponse))
const mockSignInUser = jest.fn(() => Promise.resolve(signInWithEmailAndPasswordResponse))

jest.mock('firebase', () => ({
  auth: () => ({
    signInWithEmailAndPassword: mockSignInUser,
    createUserWithEmailAndPassword: mockCreateUser,
    fetchProvidersForEmail: mockFetchProviders,
    currentUser: { uid: '12345' }
  }),
  database: jest.fn(() => mockDatabase)
}))

describe('Firebase authentication service', () => {
  const email = 'new@user.com'
  const password = 'pass123'

  it('Should register new user and send a verification mail', async () => {
    await signUp(email, password)
    expect(mockCreateUser).toHaveBeenCalledWith(email, password)
    expect(signInWithEmailAndPasswordResponse.sendEmailVerification).toHaveBeenCalledWith()
  })

  it('Should sign in user with a verified email', async () => {
    signInWithEmailAndPasswordResponse.emailVerified = true
    const user = await signIn(email, password)
    expect(mockSignInUser).toHaveBeenCalledWith(email, password)
    expect(user.uid).toBe(signInWithEmailAndPasswordResponse.uid)
  })

  it('Should send a verification email during sign in if user does not verified yet', async () => {
    signInWithEmailAndPasswordResponse.emailVerified = false
    await expect(signIn('email', 'pass')).rejects.toBeInstanceOf(Error)
    expect(signInWithEmailAndPasswordResponse.sendEmailVerification).toHaveBeenCalledWith()
  })

  it('Should send email verification for users', async () => {
    signInWithEmailAndPasswordResponse.sendEmailVerification = jest.fn(() => Promise.resolve())
    await sendVerificationEmail(signInWithEmailAndPasswordResponse)
    expect(signInWithEmailAndPasswordResponse.sendEmailVerification).toHaveBeenCalled()
  })

  it('Should check if an email is registered or not', async () => {
    mockFetchProviders = jest.fn(() => Promise.resolve(['providerOne', 'providerTwo']))
    const registeredUserResponse = await checkEmailRegistration('registered@email.com')
    expect(registeredUserResponse).toBe(true)

    mockFetchProviders = jest.fn(() => Promise.resolve([]))
    const notRegisteredUserResponse = await checkEmailRegistration('not_registered@email.com')
    expect(notRegisteredUserResponse).toBe(false)
  })
})

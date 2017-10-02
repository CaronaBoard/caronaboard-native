import {
  signUp,
  checkEmailRegistration,
  signIn,
  sendVerificationEmail, initializeAuthModule
} from '../../../../src/services/firebase/Authentication'
import { firebaseUserFixture } from '../../../resources/fixtures/firebase'

describe('Firebase authentication service', () => {
  const email = 'new@user.com'
  const password = 'pass123'
  const mockCreateUser = jest.fn(() => Promise.resolve(firebaseUserFixture))
  const mockSignInUser = jest.fn(() => Promise.resolve(firebaseUserFixture))
  const authMock = {
    signInWithEmailAndPassword: mockSignInUser,
    createUserWithEmailAndPassword: mockCreateUser,
    fetchProvidersForEmail: jest.fn(),
    currentUser: { uid: '12345' },
    setPersistence: jest.fn()
  }

  beforeAll(() => {
    initializeAuthModule(authMock)
  })

  it('Should register new user and send a verification mail', async () => {
    await signUp(email, password)
    expect(mockCreateUser).toHaveBeenCalledWith(email, password)
    expect(firebaseUserFixture.sendEmailVerification).toHaveBeenCalledWith()
  })

  it('Should sign in user with a verified email', async () => {
    firebaseUserFixture.emailVerified = true
    const user = await signIn(email, password)
    expect(mockSignInUser).toHaveBeenCalledWith(email, password)
    expect(user.uid).toBe(firebaseUserFixture.uid)
  })

  it('Should send a verification email during sign in if user does not verified yet', async () => {
    firebaseUserFixture.emailVerified = false
    await expect(signIn('email', 'pass')).rejects.toBeInstanceOf(Error)
    expect(firebaseUserFixture.sendEmailVerification).toHaveBeenCalledWith()
  })

  it('Should send email verification for users', async () => {
    firebaseUserFixture.sendEmailVerification = jest.fn(() => Promise.resolve())
    await sendVerificationEmail(firebaseUserFixture)
    expect(firebaseUserFixture.sendEmailVerification).toHaveBeenCalled()
  })

  it('Should check if an email is registered or not', async () => {
    authMock.fetchProvidersForEmail = jest.fn(() => Promise.resolve(['providerOne', 'providerTwo']))
    const registeredUserResponse = await checkEmailRegistration('registered@email.com')
    expect(registeredUserResponse).toBe(true)

    authMock.fetchProvidersForEmail = jest.fn(() => Promise.resolve([]))
    const notRegisteredUserResponse = await checkEmailRegistration('not_registered@email.com')
    expect(notRegisteredUserResponse).toBe(false)
  })
})

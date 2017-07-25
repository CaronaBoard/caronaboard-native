import {
  signUp,
  checkEmailRegistration,
  signIn,
  sendVerificationEmail,
  saveProfile
} from '../../../src/services/firebase/Authentication'
import RidesResponse from '../../__mocks__/Fixtures/FirebaseRidesResponse.json'

let mockFirebaseResponse = {
  sendEmailVerification: jest.fn(() => Promise.resolve()),
  uid: '-KndyvnnlSN05mJxL57Q',
  emailVerified: true,
  email: 'teste@email.io',
  phoneNumber: '988887777'
}

let mockFetchProviders = jest.fn()

const mockRef = {
  once: () => Promise.resolve({ val: () => RidesResponse }),
  update: () => Promise.resolve({})
}

const mockDatabase = {
  ref: jest.fn(() => mockRef)
}

const mockCreateUser = jest.fn(() => Promise.resolve(mockFirebaseResponse))

const mockSignInUser = jest.fn(() => Promise.resolve(mockFirebaseResponse))

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
  it('Should register new user and send a verification mail', async () => {
    const email = 'new@user.com'
    const password = 'pass123'
    await signUp(email, password)
    expect(mockCreateUser).toHaveBeenCalledWith(email, password)
    expect(mockFirebaseResponse.sendEmailVerification).toHaveBeenCalledWith()
  })

  it('Should sign in user with a verified email', async () => {
    mockFirebaseResponse.emailVerified = true
    const email = 'verified@user.com'
    const password = 'secret'
    const user = await signIn(email, password)
    expect(mockSignInUser).toHaveBeenCalledWith(email, password)
    expect(user.uid).toBe(mockFirebaseResponse.uid)
  })

  it('Should send a verification email during sign in if user does not verified yet', async () => {
    mockFirebaseResponse.emailVerified = false
    await expect(signIn('email', 'pass')).rejects.toBeInstanceOf(Error)
    expect(mockFirebaseResponse.sendEmailVerification).toHaveBeenCalledWith()
  })

  it('Should send email verification for users', async () => {
    mockFirebaseResponse.sendEmailVerification = jest.fn(() => Promise.resolve())
    await sendVerificationEmail(mockFirebaseResponse)
    expect(mockFirebaseResponse.sendEmailVerification).toHaveBeenCalled()
  })

  it('Should check if an email is registered or not', async () => {
    mockFetchProviders = jest.fn(() => Promise.resolve(['providerOne', 'providerTwo']))
    const registeredUserResponse = await checkEmailRegistration('registered@email.com')
    expect(registeredUserResponse).toBe(true)

    mockFetchProviders = jest.fn(() => Promise.resolve([]))
    const notRegisteredUserResponse = await checkEmailRegistration('not_registered@email.com')
    expect(notRegisteredUserResponse).toBe(false)
  })

  it('Should update the user profile info', async () => {
    const profile = {name: 'John Smith'}
    const updatedProfile = await saveProfile(profile)
    expect(updatedProfile.name).toBe(profile.name)
  })
})

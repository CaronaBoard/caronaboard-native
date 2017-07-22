import {
  signUp,
  checkEmailRegistration,
  signIn,
  sendVerificationEmail
} from '../../../src/services/firebase/Authentication'

let mockFirebaseResponse = {
  sendEmailVerification: jest.fn(() => Promise.resolve()),
  uid: '-KndyvnnlSN05mJxL57Q',
  emailVerified: true,
  email: 'teste@email.io',
  phoneNumber: '988887777'
}
let mockFetchProviders = jest.fn()

jest.mock('firebase', () => ({
  auth: () => ({
    signInWithEmailAndPassword: () => Promise.resolve(mockFirebaseResponse),
    createUserWithEmailAndPassword: jest.fn(() => Promise.resolve(mockFirebaseResponse)),
    fetchProvidersForEmail: mockFetchProviders
  })
}))

describe('Firebase authentication service', () => {
  it('Should register new user and send a verification mail', async () => {
    const email = 'new@user.com'
    const password = 'pass123'
    await signUp(email, password)
    // expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(email, password)
    expect(mockFirebaseResponse.sendEmailVerification).toHaveBeenCalledWith()
  })

  it('Should sign in user with a verified email', async () => {
    mockFirebaseResponse.emailVerified = true
    const user = await signIn('verified@user.com', 'secret')
    // expect(signInWithEmailAndPassword).toHaveBeenCalledWith(email, password)
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
})

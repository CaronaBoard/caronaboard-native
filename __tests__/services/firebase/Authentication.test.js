import { checkEmailRegistration, signIn, sendEmailVerification } from '../../../src/services/firebase'

describe('Firebase authentication service', () => {
  it('Should sign in verified user', async () => {
    const user = await signIn('user', 'pass')

    expect(user.uid).toBe('101')
  })

  it('Should check users email', async () => {
    const isUserRegistered = await checkEmailRegistration('email@email.com')
    expect(isUserRegistered).toBe(true)
  })

  it('Should send email verification for users', async () => {
    const promise = sendEmailVerification('email@email.com')
    await expect(promise).resolves.toBe('Email de verificação enviado')
  })
})

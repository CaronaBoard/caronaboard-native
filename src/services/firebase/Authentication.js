import Firebase from 'firebase'

let auth

export const initializeAuthModule = module => {
  auth = module
  auth.setPersistence(Firebase.auth.Auth.Persistence.LOCAL)
}

export const onAuthStateChanged = callback => {
  auth.onAuthStateChanged(callback)
}

export const signIn = async (email: string, password: string) => {
  const user = await auth.signInWithEmailAndPassword(email, password)
  if (!user.emailVerified) {
    await sendVerificationEmail(user)
    throw (new Error('Email não verificado'))
  }
  return user
}

export const signUp = async (email: string, password: string) => {
  try {
    const user = await auth.createUserWithEmailAndPassword(email, password)
    sendVerificationEmail(user)
  } catch (error) {
    console.error(error)
  }
}

export const checkEmailRegistration = async (email: string) => {
  const providers = await auth.fetchProvidersForEmail(email)
  return providers.length !== 0
}

export const sendVerificationEmail = async (user) => {
  try {
    await user.sendEmailVerification()
    console.log('Email de verificação enviado')
  } catch (error) {
    console.error(error)
  }
}

export const forgotPassword = (email) => {
  return auth.sendPasswordResetEmail(email)
}

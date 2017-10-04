import Firebase from 'firebase'
import { saveProfile } from './database/Profile'

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
  const user = await auth.createUserWithEmailAndPassword(email, password)
  await saveProfile({name: email, uid: user.uid, contact: {value: '', kind: ''}})
  await sendVerificationEmail(user)
}

export const signOut = async () => {
  return auth.signOut()
}

export const checkEmailRegistration = async (email: string) => {
  const providers = await auth.fetchProvidersForEmail(email)
  return providers.length !== 0
}

export const sendVerificationEmail = async (user) => {
  return user.sendEmailVerification()
}

export const forgotPassword = async (email) => {
  return auth.sendPasswordResetEmail(email)
}

export const sendPasswordResetEmail = async (email: string) => {
  return auth.sendPasswordResetEmail(email)
}

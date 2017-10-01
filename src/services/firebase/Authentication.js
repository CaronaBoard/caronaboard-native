import Firebase from 'firebase'

let auth

export const initializeAuthModule = module => {
  auth = module
  auth.setPersistence(Firebase.auth.Auth.Persistence.LOCAL)
}

export const onAuthStateChanged = callback => {
  auth.onAuthStateChanged(callback)
}

export const signIn = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password)
      .then(user => {
        if (!user.emailVerified) {
          sendVerificationEmail(user)
          throw (new Error('Email não verificado'))
        } else {
          return user
        }
      })
}

export const signUp = (email, password) => {
  return Firebase.auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => sendVerificationEmail(user))
}

export const checkEmailRegistration = (email) => {
  return new Promise(resolve => {
    auth.fetchProvidersForEmail(email)
      .then(providers => {
        if (providers.length === 0) {
          resolve(false)
        } else {
          resolve(true)
        }
      })
  })
}

export function sendVerificationEmail (user) {
  user.sendEmailVerification()
    .then(() => console.log('Email de verificação enviado'))
    .catch(() => console.error('Error ao enviar email de verificação'))
}

export const forgotPassword = (email) => {
  return auth.sendPasswordResetEmail(email)
}

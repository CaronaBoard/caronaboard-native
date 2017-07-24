import Firebase from 'firebase'

export const signIn = (email, password) => {
  return new Promise((resolve, reject) => {
    Firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        const { uid, emailVerified, email, phoneNumber } = user
        if (!emailVerified) {
          sendVerificationEmail(user)
          reject(new Error('Email não verificado'))
        } else {
          resolve({ uid, emailVerified, email, phoneNumber })
        }
      })
  })
}

export const checkEmailRegistration = (email) => {
  return new Promise(resolve => {
    Firebase.auth().fetchProvidersForEmail(email)
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

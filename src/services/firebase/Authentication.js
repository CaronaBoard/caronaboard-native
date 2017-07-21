import Firebase from 'firebase'

export const signIn = (email, password) => {
  return new Promise((resolve, reject) => {
    Firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        const { uid, emailVerified, email, phoneNumber } = user

        if (!emailVerified) {
          reject(sendEmailVerification(user))
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

export function sendEmailVerification (user) {
  const error = new Error('Este email não foi verificado, favor verificar sua caixa de mensagem')
  user.sendEmailVerification()
    .then(() => console.log('Email de verificação enviado'))
    .catch(() => console.error('Error ao enviar email de verificação'))
  return error
}

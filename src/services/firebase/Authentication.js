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

export const signUp = (email, password) => {
  return Firebase.auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => sendVerificationEmail(user))
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

export const saveProfile = (profile) => {
  var currentUser = Firebase.auth().currentUser
  var pathsToUpdate = {}
  pathsToUpdate[`profiles/${currentUser.uid}`] = profile

  return new Promise((resolve, reject) => {
    Firebase
      .database()
      .ref(`rides/${currentUser.uid}`)
      .once('value')
      .then(rides => {
        Object.keys(rides.val() || {}).forEach(function (key) {
          pathsToUpdate[`rides/${currentUser.uid}/${key}/profile`] = profile
        })
        return Firebase.database()
          .ref()
          .update(pathsToUpdate)
          .then(() => resolve(profile))
      })
  })
}

export const forgotPassword = (email) => {
  return Firebase.auth().sendPasswordResetEmail(email)
}

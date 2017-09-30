import Firebase from 'firebase'

// TODO: REMOVE THIS AS SOON WE FIGURE OUT HOW TO INJECT SECRETS ON CI
const firebaseConfig = {
  apiKey: 'AIzaSyBQnTKUKjQ0HkLUdHVs7a8_hFyCO-nbT-M',
  authDomain: 'caronaboard-hack-night.firebaseapp.com',
  databaseURL: 'https://caronaboard-hack-night.firebaseio.com',
  storageBucket: 'caronaboard-hack-night.appspot.com',
  messagingSenderId: '905421185910'
}

const initialize = () => {
  try {
    Firebase.initializeApp(firebaseConfig)
  } catch (error) {
    if (error.code === 'app/duplicate-app') {
      console.info('Hot reload tried to initiate firebase again. Ignoring duplicated initialization')
    } else {
      throw error
    }
  }
}

export default { initialize }

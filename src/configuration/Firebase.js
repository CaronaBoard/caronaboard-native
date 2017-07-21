import Firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDfwHLwWKTqduazsf4kjbstJEA2E1sCeoI',
  authDomain: 'caronaboard-61f75.firebaseapp.com',
  databaseURL: 'https://caronaboard-61f75.firebaseio.com',
  storageBucket: 'caronaboard-61f75.appspot.com',
  messagingSenderId: '617045704123'
}

const initialize = () => {
  try {
    Firebase.initializeApp(config)
  } catch (error) {
    if (error.code === 'app/duplicate-app') {
      console.info('Hot reload tried to initiate firebase again. Ignoring duplicated initialization')
    } else {
      throw error
    }
  }
}

export default { initialize }

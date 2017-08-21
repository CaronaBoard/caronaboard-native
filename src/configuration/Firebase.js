import Firebase from 'firebase'
import Config from 'react-native-config'

const firebaseConfig = {
  apiKey: Config.API_KEY,
  authDomain: Config.AUTH_DOMAIN,
  databaseURL: Config.DATABASE_URL,
  storageBucket: Config.STORAGE_BUCKET,
  messagingSenderId: Config.MESSAGING_SENDER_ID
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

import Firebase from 'firebase'
import {
  initializeDatabaseModule,
  initializeAuthModule,
  ERROR
} from '../services/firebase'

// TODO: REMOVE THIS AS SOON WE FIGURE OUT HOW TO INJECT SECRETS ON CI
const firebaseConfig = {
  apiKey: 'AIzaSyBQnTKUKjQ0HkLUdHVs7a8_hFyCO-nbT-M',
  authDomain: 'caronaboard-hack-night.firebaseapp.com',
  databaseURL: 'https://caronaboard-hack-night.firebaseio.com',
  storageBucket: 'caronaboard-hack-night.appspot.com',
  messagingSenderId: '905421185910'
}

const initializeAuth = async (app) => {
  const auth = Firebase.auth(app)
  initializeAuthModule(auth)
}

const initializeDatabase = (app) => {
  const database = Firebase.database(app)
  initializeDatabaseModule(database)
}

const initialize = async () => {
  try {
    const app = await Firebase.initializeApp(firebaseConfig)
    await initializeAuth(app)
    initializeDatabase(app)
  } catch (error) {
    if (error.code === ERROR.duplicatedApp) {
      console.info('Hot reload tried to initiate firebase again. Ignoring duplicated initialization')
    } else {
      throw error
    }
  }
}

export default {initialize}

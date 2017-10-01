import Firebase from 'firebase'
import { initializeAuthModule } from '../services/firebase/Authentication'
import { initializeDatabaseModule } from '../services/firebase/database/index'
import Navigation from './Navigation'

// TODO: REMOVE THIS AS SOON WE FIGURE OUT HOW TO INJECT SECRETS ON CI
const firebaseConfig = {
  apiKey: 'AIzaSyBQnTKUKjQ0HkLUdHVs7a8_hFyCO-nbT-M',
  authDomain: 'caronaboard-hack-night.firebaseapp.com',
  databaseURL: 'https://caronaboard-hack-night.firebaseio.com',
  storageBucket: 'caronaboard-hack-night.appspot.com',
  messagingSenderId: '905421185910'
}

const initializeAuth = async (app, store) => {
  const auth = Firebase.auth(app)
  auth.onAuthStateChanged(user => {
    // TODO: This function cause severe side effect, figure out a better way to
    // handle auth persistence
    Navigation.startApp(user, store)
  })
  initializeAuthModule(auth)
}

const initializeDatabase = (app) => {
  const database = Firebase.database(app)
  initializeDatabaseModule(database)
}

const initialize = async (store) => {
  try {
    const app = await Firebase.initializeApp(firebaseConfig)
    await initializeAuth(app, store)
    initializeDatabase(app)
  } catch (error) {
    if (error.code === 'app/duplicate-app') {
      console.info('Hot reload tried to initiate firebase again. Ignoring duplicated initialization')
    } else {
      throw error
    }
  }
}

export default { initialize }

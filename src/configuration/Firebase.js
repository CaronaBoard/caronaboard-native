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

const initializeAuth = async (app) => {
  const auth = Firebase.auth(app)
  initializeAuthModule(auth)
  // TODO: This function cause severe side effect, figure out a better way to
  // handle auth persistence
  auth.onAuthStateChanged(user => {
    Navigation.startApp(user)
  })

  auth.signOut()
}

const initializeDatabase = (app) => {
  const database = Firebase.database(app)
  initializeDatabaseModule(database)
}

const initialize = async () => {
  try {
    const app = await Firebase.initializeApp(firebaseConfig)
    const user = await initializeAuth(app)
    initializeDatabase(app)

    // dispatch(updateProfile(profile))
    // dispatch(updateUserData(user))
    console.log(user, 'is ===> user')
  } catch (error) {
    if (error.code === 'app/duplicate-app') {
      console.info('Hot reload tried to initiate firebase again. Ignoring duplicated initialization')
    } else {
      throw error
    }
  }
}

export default { initialize }

import Kitten from './configuration/kitten'
import Firebase from './configuration/Firebase'
import Redux from './configuration/Redux'
import { onAuthStateChanged } from './services/firebase/Authentication'
import { registerScreens, startAuthentication, startCaronaBoard } from './configuration/Navigation'
import { setupInternalization } from './configuration/i18n'

async function main () {
  const store = Redux.createStore()
  setupInternalization()
  registerScreens(store)
  Kitten.setup()
  await Firebase.initialize()

  onAuthStateChanged(user => {
    user ? startCaronaBoard(user, store)
         : startAuthentication()
  })
}

main().catch(error => {
  console.error(error)
})

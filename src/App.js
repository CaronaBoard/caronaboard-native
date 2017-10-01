import Kitten from './configuration/kitten'
import Firebase from './configuration/Firebase'
import Redux from './configuration/Redux'
import { onAuthStateChanged } from './services/firebase/Authentication'
import { registerScreens, startAuthentication, startCaronaBoard } from './configuration/Navigation'

async function main () {
  const store = Redux.createStore()
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

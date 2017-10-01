import Kitten from './configuration/kitten'
import Navigation from './configuration/Navigation'
import Firebase from './configuration/Firebase'
import Redux from './configuration/Redux'

async function main () {
  const store = Redux.createStore()
  Firebase.initialize()
  Kitten.setup()
  Navigation.registerScreens(store)
  Navigation.startApp()
}

main().catch(error => {
  console.error(error)
})

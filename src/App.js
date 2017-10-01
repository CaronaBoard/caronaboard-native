import Kitten from './configuration/kitten'
import Navigation from './configuration/Navigation'
import Firebase from './configuration/Firebase'
import Redux from './configuration/Redux'

async function main () {
  const store = Redux.createStore()
  Navigation.registerScreens(store)
  Kitten.setup()
  await Firebase.initialize(store)
}

main().catch(error => {
  console.error(error)
})

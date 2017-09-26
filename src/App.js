import Kitten from './configuration/kitten'
import Navigation from './configuration/Navigation'
import Firebase from './configuration/Firebase'
import Redux from './configuration/Redux'

Kitten.setup()
Firebase.initialize()
Navigation.registerScreens(Redux.createStore())
Navigation.startApp()

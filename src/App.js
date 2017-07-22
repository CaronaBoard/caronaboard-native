import Kitten from './configuration/Kitten'
import Screens from './configuration/Screens'
import Navigation from './configuration/Navigation'
import Firebase from './configuration/Firebase'
import Redux from './configuration/Redux'

Kitten.setup()
Firebase.initialize()
Screens.registerScreens(Redux.createStore())
Navigation.startApp()

import Kitten from './configuration/Kitten'
import Screens from './configuration/Screens'
import Navigation from './configuration/Navigation'
import Redux from './configuration/Redux'

Kitten.setup()
Screens.registerScreens(Redux.createStore())
Navigation.startApp()

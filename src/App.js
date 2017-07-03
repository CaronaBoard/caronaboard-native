import Kitten from './Configuration/Kitten'
import Screens from './Configuration/Screens'
import Navigation from './Configuration/Navigation'
import Redux from './Configuration/Redux'

Kitten.setup()
Screens.registerScreens(Redux.createStore())
Navigation.startApp()

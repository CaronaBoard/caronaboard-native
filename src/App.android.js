import { Navigation } from 'react-native-navigation'

import RegisterScreens from './Screens'
import Kitten from './Themes/Kitten'
import { tabsStyle, appStyle, animationType, tabs } from './Themes/Navigation'
import { configureStore } from './Configuration/CreateStore'

Kitten.setup()
RegisterScreens(configureStore())

Navigation.startTabBasedApp({
  tabs,
  animationType,
  tabsStyle,
  appStyle
})

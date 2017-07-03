import { Navigation } from 'react-native-navigation'

import Kitten from './Configuration/Kitten'
import Screens from './Configuration/Screens'
import { createStore } from './Configuration/Redux'
import { tabsStyle, appStyle, animationType, tabs } from './Configuration/Navigation'

Kitten.setup()
Screens.registerScreens(createStore())

Navigation.startTabBasedApp({
  tabs,
  animationType,
  tabsStyle,
  appStyle
})

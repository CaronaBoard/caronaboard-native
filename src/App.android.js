import { Navigation } from 'react-native-navigation'

import RegisterScreens from './Screens'
import Kitten from './Themes/Kitten'
import { tabsStyle, appStyle, animationType, tabs } from './Themes/Navigation.ios'

Kitten.setup()
RegisterScreens()

Navigation.startTabBasedApp({
  tabs,
  animationType,
  tabsStyle,
  appStyle
})

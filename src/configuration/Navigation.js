import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'

import { screens } from '../navigation/Screens'
import { tabs } from '../navigation/Tabs'
import { style, barsHidden } from '../navigation/Styles'

const { startTabBasedApp, startSingleScreenApp, registerComponent } = Navigation

const tabAppParams = {
  tabs,
  animationType: 'fade',
  tabsStyle: style,
  appStyle: style
}

const singleAppParams = () => {
  return {
    screen: {
      screen: screens.signIn.id,
      navigatorStyle: barsHidden
    }
  }
}

const isUserSignedIn = () => true
const startCaronaBoard = () => startTabBasedApp(tabAppParams)
const startAuthentication = () => startSingleScreenApp(singleAppParams())

const startApp = () => {
  isUserSignedIn() ? startCaronaBoard() : startAuthentication()
}

const registerScreens = (store) => {
  for (const screen in screens) {
    const { id, component } = screens[screen]
    registerComponent(id, () => component, store, Provider)
  }
}

export default { startApp, registerScreens, userLoggedIn: startCaronaBoard }

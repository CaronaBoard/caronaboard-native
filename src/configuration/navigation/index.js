import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'

import { screens, tabs } from './Screens'
import { style, barsHidden } from './Styles'

const { startTabBasedApp, startSingleScreenApp, registerComponent } = Navigation

const tabAppParams = {
  tabs,
  animationType: 'fade',
  tabsStyle: style,
  appStyle: style
}

const singleAppParams = {
  screen: {
    screen: 'authentication.signIn',
    navigatorStyle: barsHidden
  }
}

const isUserSignedIn = () => true
const startCaronaBoard = () => startTabBasedApp(tabAppParams)
const startAuthentication = () => startSingleScreenApp(singleAppParams)

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

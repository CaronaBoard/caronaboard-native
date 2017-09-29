import { Navigation } from 'react-native-navigation'
import SignInScreen from '../modules/authentication/containers/SignInScreen'

import { Provider } from 'react-redux'

import { screens } from '../navigation/Screens'
import { tabs } from '../navigation/Tabs'
import { style, barsHidden } from '../navigation/Styles'

const { startTabBasedApp, startSingleScreenApp, registerComponent } = Navigation

// TODO: Refactor this, this was causing cyclic dependency on screens.js
const signInScreen = {
  id: 'authentication.signIn',
  component: SignInScreen
}

const tabAppParams = {
  tabs,
  animationType: 'fade',
  tabsStyle: style,
  appStyle: style
}

const singleAppParams = () => {
  return {
    screen: {
      screen: signInScreen.id,
      navigatorStyle: barsHidden
    }
  }
}

const isUserSignedIn = () => false
const startCaronaBoard = () => startTabBasedApp(tabAppParams)
const startAuthentication = () => startSingleScreenApp(singleAppParams())

const startApp = () => {
  isUserSignedIn() ? startCaronaBoard() : startAuthentication()
}

const registerScreens = (store) => {
  registerComponent(signInScreen.id, () => signInScreen.component, store, Provider)

  for (const screen in screens) {
    const { id, component } = screens[screen]
    registerComponent(id, () => component, store, Provider)
  }
}

export default { startApp, registerScreens, userLoggedIn: startCaronaBoard }

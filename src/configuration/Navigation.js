import { Navigation } from 'react-native-navigation'
import SignInScreen from '../modules/authentication/containers/SignInScreen'

import { Provider } from 'react-redux'

import { screens } from '../navigation/Screens'
import { tabs } from '../navigation/Tabs'
import { style, barsHidden } from '../navigation/Styles'
import { signInFirebase } from '../redux/actions/async/AuthActions'

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

const singleAppParams = {
  screen: {
    screen: signInScreen.id,
    navigatorStyle: barsHidden
  }
}

const isUserSignedIn = (user) => !!user
const startAuthentication = () => startSingleScreenApp(singleAppParams)
const startCaronaBoard = (user, store) => {
  store.dispatch(signInFirebase(user))
  startTabBasedApp(tabAppParams)
}

const startApp = (user, store) => {
  isUserSignedIn(user) ? startCaronaBoard(user, store) : startAuthentication()
}

const registerScreens = (store) => {
  registerComponent(signInScreen.id, () => signInScreen.component, store, Provider)

  for (const screen in screens) {
    const { id, component } = screens[screen]
    registerComponent(id, () => component, store, Provider)
  }
}

export default { startApp, registerScreens }

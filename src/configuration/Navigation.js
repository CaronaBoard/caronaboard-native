import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'

import { tabs } from '../navigation/Tabs'
import { screens } from '../navigation/Screens'
import { style, barsHidden } from '../navigation/Styles'
import { signInFirebase } from '../redux/actions/async/AuthActions'

const {
  startTabBasedApp,
  startSingleScreenApp,
  registerComponent
} = Navigation

export const startAuthentication = () => {
  const singleAppParams = {
    screen: {
      screen: screens.signIn.id,
      navigatorStyle: barsHidden
    }
  }

  startSingleScreenApp(singleAppParams)
}

export const startCaronaBoard = (user, store) => {
  const tabAppParams = {
    tabs,
    animationType: 'fade',
    tabsStyle: style,
    appStyle: style
  }

  store.dispatch(signInFirebase(user))
  startTabBasedApp(tabAppParams)
}

export const registerScreens = (store) => {
  for (const screen in screens) {
    const {id, component} = screens[screen]
    registerComponent(id, () => component, store, Provider)
  }
}

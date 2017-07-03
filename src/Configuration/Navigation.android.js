import { Navigation } from 'react-native-navigation'
import { Colors } from '../Modules/Shared/Themes'

const navigatorStyle = {
  statusBarColor: Colors.black,
  statusBarTextColorScheme: Colors.white,
  navigationBarColor: Colors.black,
  navBarBackgroundColor: Colors.black,
  navBarTextColor: Colors.white,
  navBarButtonColor: Colors.white,
  tabBarButtonColor: Colors.red,
  tabBarSelectedButtonColor: Colors.red,
  tabBarBackgroundColor: Colors.white
}

export const singleScreenAppParams = {
  screen: {
    screen: 'carona.signIn',
    title: 'Sign In',
    navigatorStyle
  }
}

export default {
  startApp: () => Navigation.startSingleScreenApp(singleScreenAppParams)
}

import { Navigation } from 'react-native-navigation'
import { Colors, Fonts } from '../modules/shared/themes'

const theme = {
  tabBarBackgroundColor: Colors.blue,
  navBarButtonColor: Colors.white,
  tabBarButtonColor: Colors.white,
  navBarTextColor: Colors.white,
  tabBarSelectedButtonColor: Colors.darkblue,
  navigationBarColor: Colors.blue,
  navBarBackgroundColor: Colors.blue,
  statusBarColor: Colors.bloodOrange,
  tabFontFamily: Fonts.type.base
}

const tabs = [
  {
    label: 'SignUp',
    screen: 'carona.signUp',
    icon: require('../assets/images/swap.png')
  }, {
    label: 'SignIn',
    screen: 'carona.signIn',
    icon: require('../assets/images/swap.png'),
    title: 'Sign In Screen'
  }, {
    label: 'RideList',
    screen: 'carona.rideList',
    icon: require('../assets/images/swap.png'),
    title: 'Ride List'
  }, {
    label: 'RideOffer',
    screen: 'carona.rideOffer',
    icon: require('../assets/images/swap.png'),
    title: 'Ride Offer'
  }
]

export const tabBasedAppParams = {
  tabs,
  animationType: 'fade',
  tabsStyle: theme,
  appStyle: theme
}

export default {
  startApp: () => Navigation.startTabBasedApp(tabBasedAppParams)
}

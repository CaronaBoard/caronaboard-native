import { Navigation } from 'react-native-navigation'
import { Colors, Fonts } from '../Modules/Shared/Themes'

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
    label: 'SignIn',
    screen: 'carona.signIn',
    icon: require('../Assets/Images/swap.png'),
    title: 'Sign In Screen'
  }, {
    label: 'RideList',
    screen: 'carona.rideList',
    icon: require('../Assets/Images/swap.png'),
    title: 'Ride List'
  }, {
    label: 'RideOffer',
    screen: 'carona.rideOffer',
    icon: require('../Assets/Images/swap.png'),
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

import { Navigation } from 'react-native-navigation'
import { Colors, Fonts } from '../modules/shared/themes'
import { screens } from './Screens'

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
    label: screens.signIn.label,
    screen: screens.signIn.id,
    icon: require('../assets/images/swap.png'),
    navigatorStyle: {
      navBarHidden: true,
      tabBarHidden: true,
      statusBarHidden: true,
      statusBarHideWithNavBar: true
    }
  }, {
    label: screens.profile.label,
    screen: screens.profile.id,
    title: screens.profile.title,
    icon: require('../assets/images/swap.png')
  }, {
    label: screens.rideList.label,
    screen: screens.rideList.id,
    title: 'Ride List',
    icon: require('../assets/images/swap.png')
  }, {
    label: screens.rideOffer.label,
    screen: screens.rideOffer.id,
    title: screens.profile.title,
    icon: require('../assets/images/swap.png')
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

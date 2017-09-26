import { screens } from './Screens'
import {profileButton} from './NavBar'

export const tabs = [
  {
    label: screens.rideList.label,
    screen: screens.rideList.id,
    title: screens.rideList.title,
    icon: require('../assets/images/swap.png'),
    navigatorButtons: {
      rightButtons: [profileButton]
    }
  }, {
    label: screens.rideOffer.label,
    screen: screens.rideOffer.id,
    title: screens.profile.title,
    icon: require('../assets/images/swap.png'),
    navigatorButtons: {
      rightButtons: [profileButton]
    }
  }
]

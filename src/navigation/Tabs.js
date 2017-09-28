import { screens } from './Screens'
import { profileButton } from './NavBar'

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
    label: screens.rideOfferList.label,
    screen: screens.rideOfferList.id,
    title: screens.rideOfferList.title,
    icon: require('../assets/images/swap.png'),
    navigatorButtons: {
      rightButtons: [profileButton]
    }
  }
]

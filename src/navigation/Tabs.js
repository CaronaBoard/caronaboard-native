import { screens } from './Screens'
import { profileButton } from './NavBar'

export const tabs = [
  {
    label: screens.yourRequestsList.label,
    screen: screens.yourRequestsList.id,
    title: screens.yourRequestsList.title,
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
  }, {
    label: screens.yourRideOffersList.label,
    screen: screens.yourRideOffersList.id,
    title: screens.yourRideOffersList.title,
    icon: require('../assets/images/swap.png'),
    navigatorButtons: {
      rightButtons: [profileButton]
    }
  }
]

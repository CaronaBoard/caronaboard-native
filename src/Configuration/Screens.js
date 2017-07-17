import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'

import SignInScreen from '../Modules/Authentication/Containers/SignInScreen'
import RideList from '../Modules/RideRequest/Containers/RideList'
import RideOffer from '../Modules/RideRequest/Containers/RideOfferScreen'
import RideRequest from '../Modules/RideRequest/Containers/RideRequestScreen'

const registerScreens = (store) => {
  Navigation.registerComponent('carona.signIn', () => SignInScreen, store, Provider)
  Navigation.registerComponent('carona.rideList', () => RideList, store, Provider)
  Navigation.registerComponent('carona.rideOffer', () => RideOffer, store, Provider)
  Navigation.registerComponent('carona.rideRequest', () => RideRequest, store, Provider)
}

export default {
  registerScreens
}

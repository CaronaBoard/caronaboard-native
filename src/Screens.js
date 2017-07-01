import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'

import SignInScreen from './Containers/SignInScreen'
import RideList from './Containers/RideList'
import TestScreen from './Containers/TestScreen'

export default function (store) {
  Navigation.registerComponent('carona.signIn', () => SignInScreen, store, Provider)
  Navigation.registerComponent('carona.rideList', () => RideList, store, Provider)
  Navigation.registerComponent('carona.testScreen', () => TestScreen, store, Provider)
}

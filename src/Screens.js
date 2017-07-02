import { Navigation } from 'react-native-navigation'
import SignInScreen from './Containers/SignInScreen'

export default function () {
  Navigation.registerComponent('example.Types', () => SignInScreen)
}

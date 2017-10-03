import SignUpScreen from '../modules/authentication/containers/SignUpScreen'
import ForgotPasswordScreen from '../modules/authentication/containers/ForgotPasswordScreen'
import ProfileScreen from '../modules/authentication/containers/ProfileScreen'
import RideList from '../modules/rideOffer/containers/RideOffersListContainer'
import RideOffer from '../modules/rideOffer/containers/NewRideOfferContainer'
import RideRequest from '../modules/rideRequest/containers/NewRideRequestContainer'
import YourRideOfferList from '../modules/rideOffer/containers/YourRideOffersScreen'
import YourRideRequestsScreen from '../modules/rideRequest/containers/YourRideRequestsScreen'
import SignInScreen from '../modules/authentication/containers/SignInScreen'
import Settings from '../modules/settings/containers/SettingsContainer'
import { Feedback } from '../modules/settings/components/Feedback'

export const screens = {
  signIn: {
    id: 'authentication.signIn',
    component: SignInScreen
  },
  signUp: {
    id: 'authentication.signUp',
    component: SignUpScreen
  },
  forgotPassword: {
    id: 'authentication.forgotPassword',
    component: ForgotPasswordScreen
  },
  rideOfferList: {
    id: 'ride.list',
    component: RideList,
    label: 'Offer List',
    title: 'Offer List'
  },
  rideOffer: {
    id: 'ride.offer',
    component: RideOffer,
    label: 'Ride Offers',
    title: 'Ride Offers'
  },
  rideRequest: {
    id: 'ride.request',
    component: RideRequest,
    label: 'Ride Request',
    title: 'Ride Request'
  },
  yourRideOffersList: {
    id: 'ride.offer.list',
    component: YourRideOfferList,
    label: 'Your Ride Offers',
    title: 'Your Ride Offers'
  },
  yourRequestsList: {
    id: 'ride.request.list',
    component: YourRideRequestsScreen,
    label: 'Your Ride Requests',
    title: 'Your Ride Requests'
  },
  settings: {
    id: 'settings',
    component: Settings,
    title: 'Settings'
  },
  profile: {
    id: 'settings.profile',
    component: ProfileScreen,
    title: 'Profile'
  },
  feedback: {
    id: 'settings.feeback',
    title: 'Feedback',
    component: Feedback
  }
}

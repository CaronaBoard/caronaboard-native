import SignInScreen from '../../modules/authentication/containers/SignInScreen'
import SignUpScreen from '../../modules/authentication/containers/SignUpScreen'
import ForgotPasswordScreen from '../../modules/authentication/containers/ForgotPasswordScreen'
import ProfileScreen from '../../modules/authentication/containers/ProfileScreen'
import RideList from '../../modules/rideRequest/containers/RideList'
import RideOffer from '../../modules/rideRequest/containers/RideOfferScreen'
import RideRequest from '../../modules/rideRequest/containers/RideRequestScreen'

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
  profile: {
    id: 'user.profile',
    component: ProfileScreen,
    title: 'Profile'
  },
  rideList: {
    id: 'ride.list',
    component: RideList,
    label: 'Ride List',
    title: 'Ride List'
  },
  rideOffer: {
    id: 'ride.offer',
    component: RideOffer,
    label: 'Ride Offer',
    title: 'Ride Offer'
  },
  rideRequest: {
    id: 'ride.request',
    component: RideRequest,
    label: 'Ride Request',
    title: 'Ride Request'
  }
}

export const tabs = [
  {
    label: screens.rideList.label,
    screen: screens.rideList.id,
    title: screens.rideList.title,
    icon: require('../../assets/images/swap.png')
  }, {
    label: screens.rideOffer.label,
    screen: screens.rideOffer.id,
    title: screens.profile.title,
    icon: require('../../assets/images/swap.png')
  }
]

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

export const screens = {
  signIn: {
    id: 'authentication.signIn',
    component: SignInScreen
  },
  signUp: {
    id: 'authentication.signUp',
    title: 'Cadastrar nova conta',
    component: SignUpScreen
  },
  forgotPassword: {
    id: 'authentication.forgotPassword',
    title: 'Esqueci minha senha',
    component: ForgotPasswordScreen
  },
  rideOfferList: {
    id: 'ride.list',
    component: RideList,
    label: 'Lista de Caronas',
    title: 'Lista de Caronas'
  },
  rideOffer: {
    id: 'ride.offer',
    component: RideOffer,
    label: 'Oferta de Carona',
    title: 'Oferta de Carona'
  },
  rideRequest: {
    id: 'ride.request',
    component: RideRequest,
    label: 'Pedido de Carona',
    title: 'Pedido de Carona'
  },
  yourRideOffersList: {
    id: 'ride.offer.list',
    component: YourRideOfferList,
    label: 'Suas Ofertas de Carona',
    title: 'Suas Ofertas de Carona'
  },
  yourRequestsList: {
    id: 'ride.request.list',
    component: YourRideRequestsScreen,
    label: 'Seus Pedidos de Carona',
    title: 'Seus Pedidos de Carona'
  },
  settings: {
    id: 'settings',
    component: Settings,
    title: 'Configuraçōes'
  },
  profile: {
    id: 'settings.profile',
    component: ProfileScreen,
    title: 'Perfil'
  }
}

const tabBarBackgroundColor = '#003a66'
const navBarButtonColor = '#ffffff'
const tabBarButtonColor = '#ffffff'
const navBarTextColor = '#ffffff'
const tabBarSelectedButtonColor = '#ff505c'
const navigationBarColor = '#003a66'
const navBarBackgroundColor = '#003a66'
const statusBarColor = '#002b4c'
const tabFontFamily = 'BioRhyme-Bold'

export const animationType = 'fade'

export const tabsStyle = {
  tabBarBackgroundColor,
  navBarButtonColor,
  tabBarButtonColor,
  navBarTextColor,
  tabBarSelectedButtonColor,
  navigationBarColor,
  navBarBackgroundColor,
  statusBarColor,
  tabFontFamily
}

export const appStyle = {
  tabBarBackgroundColor,
  navBarButtonColor,
  tabBarButtonColor,
  navBarTextColor,
  tabBarSelectedButtonColor,
  navigationBarColor,
  navBarBackgroundColor,
  statusBarColor,
  tabFontFamily
}

export const tabs = [
  {
    label: 'SignIn',
    screen: 'carona.signIn',
    icon: require('../Assets/Images/swap.png'),
    title: 'Sign In Screen'
  }, {
    label: 'RideList',
    screen: 'carona.rideList',
    icon: require('../Assets/Images/swap.png'),
    title: 'Ride List'
  }, {
    label: 'Test Screen',
    screen: 'carona.testScreen',
    icon: require('../Assets/Images/swap.png'),
    title: 'Ride List'
  }
]

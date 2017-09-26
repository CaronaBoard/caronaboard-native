import { screens } from './Screens'

export const profileButton = {
  icon: require('../assets/images/swap@1x.png'),
  id: 'profile-button',
  testID: 'profile-button'
}

export function onNavigatorEvent (event) {
  const { type, id } = event
  if (type === 'NavBarButtonPress' && id === 'profile-button') {
    this.props.navigator.push({screen: screens.profile.id})
  }
}

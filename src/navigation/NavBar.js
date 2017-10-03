import { screens } from './Screens'

export const profileButton = {
  icon: require('../assets/images/gear-a.png'),
  id: 'profile-button',
  testID: 'profile-button'
}

export function onNavigatorEvent (event) {
  const { type, id } = event
  if (type === 'NavBarButtonPress' && id === 'profile-button') {
    this.props.navigator.push({
      screen: screens.settings.id,
      title: screens.settings.title
    })
  }
}

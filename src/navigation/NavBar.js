import { screens } from './Screens'

export const profileButton = {
  icon: require('../assets/images/settings.png'),
  id: 'profile-button',
  testID: 'profile-button'
}

export const groupButton = {
  icon: require('../assets/images/group.png'),
  id: 'group-button',
  testID: 'group-button'
}

export function onNavigatorEvent (event) {
  const { type, id } = event
  if (type === 'NavBarButtonPress') {
    if (id === 'profile-button') {
      this.props.navigator.push({
        screen: screens.settings.id,
        title: screens.settings.title
      })
    } else if (id === 'group-button') {
      this.props.navigator.push({
        screen: screens.groups.id,
        title: screens.groups.title
      })
    }
  }
}

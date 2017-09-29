import React from 'react'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons'

const styles = {
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white'
  }
}

export const FloatingActionButton = props => (
  <ActionButton
    buttonColor='rgba(231,76,60,1)'
    onPress={props.onPress}
    icon={<Icon name={props.icon} style={styles.actionButtonIcon} />}
  />
)

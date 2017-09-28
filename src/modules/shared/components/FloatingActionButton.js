import React from 'react'
import ActionButton from 'react-native-action-button'

export const FloatingActionButton = props => (
  <ActionButton
    buttonColor='rgba(231,76,60,1)'
    onPress={props.onPress}
  />
)

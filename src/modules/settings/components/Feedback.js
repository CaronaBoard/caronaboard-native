import React from 'react'
import { WebView } from 'react-native'

export const Feedback = () => {
  return (
    <WebView
      source={{uri: 'https://goo.gl/forms/IxVqYmchYVrHkNLq2'}}
      style={{flex: 1}}
    />
  )
}

import React from 'react'
import { WebView } from 'react-native'

export const Feedback = () => {
  return (
    <WebView
      source={{uri: 'https://goo.gl/forms/TKrnuxGW9MclpIBD2'}}
      style={{flex: 1}}
    />
  )
}

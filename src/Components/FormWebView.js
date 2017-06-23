import React, { Component } from 'react'
import { WebView } from 'react-native'

export default class FormWebView extends Component {
  render () {
    return (
      <WebView source={{uri: 'https://google.com'}} />
    )
  }
}

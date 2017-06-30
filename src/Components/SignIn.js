/* @flow */

import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput
} from 'react-native'

export default class MyComponent extends Component {
  constructor () {
    super()
    this.state = {text: ''}
  }

  render () {
    return (
      <View>
        <Text>{'Email'}</Text>
        <TextInput
          onChangeText={(text) => this.setState({text})}
          value={this.state.text} />
        <Text>{'Password'}</Text>
        <TextInput />
      </View>
    )
  }
}

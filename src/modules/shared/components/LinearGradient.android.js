import React, { Component } from 'react'
import { View } from 'react-native'

// https://github.com/CaronaBoard/caronaboard-native/issues/27
export class LinearGradient extends Component {
  render () {
    return (
      <View style={this.props.style}>
        {this.props.children}
      </View>
    )
  }
}

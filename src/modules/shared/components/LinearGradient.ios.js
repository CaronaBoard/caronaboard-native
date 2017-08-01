import React, { Component } from 'react'
import ReactNativeGradient from 'react-native-linear-gradient'
import { Colors } from '../themes'

export class LinearGradient extends Component {
  static defaultProps = {
    style: {},
    colors: [Colors.caronaBlue],
    start: {x: 0.0, y: 0.5},
    end: {x: 1, y: 0.5}
  }

  render () {
    const { style, colors, start, end, children } = this.props
    return (
      <ReactNativeGradient colors={colors} start={start} end={end} style={style}>
        {children}
      </ReactNativeGradient>
    )
  }
}

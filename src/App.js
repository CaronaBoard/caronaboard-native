/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import RideList from './Containers/RideList'
import {
  StyleSheet,
  View
} from 'react-native'

export default class caronaboardnative extends Component {
  render () {
    return (
      <View style={styles.container}>
        <RideList />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

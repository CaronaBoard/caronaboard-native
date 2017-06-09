/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import Ride from './Containers/Components/Ride'
import {
  StyleSheet,
  View
} from 'react-native'

var ride = {
  'area': 'Aeroporto',
  'days': 'Seg a Sex',
  'destination': 'Rodoviaria',
  'flexible': false,
  'formUrl': 'https://goo.gl/forms/',
  'hours': '19h',
  'name': 'Hugh Jackman',
  'origin': 'Tecnopuc'
}

export default class caronaboardnative extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Ride ride={ride} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})

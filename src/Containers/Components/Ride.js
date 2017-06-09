/* @flow */

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class Ride extends Component {
  render () {
    const {
        area,
        days,
        destination,
        flexible,
        formUrl,
        hours,
        name,
        origin
     } = this.props.ride

    return (
      <View style={styles.container}>
        <Text>{area}</Text>
        <Text>{days}</Text>
        <Text>{destination}</Text>
        <Text>{flexible}</Text>
        <Text>{formUrl}</Text>
        <Text>{hours}</Text>
        <Text>{name}</Text>
        <Text>{origin}</Text>
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

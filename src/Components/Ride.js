/* @flow */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import Styles from './Styles/RideStyles'

export default class Ride extends Component {
  render () {
    const {
        area,
        origin,
        destination,
        days,
        hours,
        name,
        flexible,
        formUrl
     } = this.props.ride

    return (
      <View style={Styles.container}>
        <View style={Styles.upperBox}>
          <Text>{area}</Text>
          <Text>{origin}</Text>
          <Text>{destination}</Text>
        </View>
        <View style={Styles.lowerBox}>
          <Text>{days}</Text>
          <Text>{hours}</Text>
          <Text>{name}</Text>
        </View>
        <Text>{flexible}</Text>
        <Text>{formUrl}</Text>
      </View>
    )
  }
}

Ride.propTypes = {
  ride: PropTypes.shape({
    area: PropTypes.string.isRequired,
    days: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    formUrl: PropTypes.string.isRequired,
    hours: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    flexible: PropTypes.bool.isRequired
  }).isRequired
}

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
        name
     } = this.props.ride

    return (
      <View style={Styles.container}>
        <Text style={Styles.title}>{area}</Text>
        <Text style={Styles.subTitle}>{origin}</Text>
        <Text style={Styles.subTitle}>{destination}</Text>
        <Text style={Styles.text}>{days}</Text>
        <Text style={Styles.text}>{hours}</Text>
        <Text style={Styles.text}>{name}</Text>
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

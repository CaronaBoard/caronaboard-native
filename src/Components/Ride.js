/* @flow */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import Styles from './Styles/RideStyles'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Ride extends Component {
  renderLine (subTitle, icon, textStyle = 'text') {
    return (
      <View style={Styles.line} >
        <Icon name={icon} style={Styles.icon} />
        <Text style={Styles[textStyle]}>{subTitle}</Text>
      </View>
    )
  }

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
        { this.renderLine(origin, 'radio-button-unchecked', 'subTitle') }
        { this.renderLine(destination, 'radio-button-unchecked', 'subTitle') }
        { this.renderLine(days, 'today') }
        { this.renderLine(hours, 'schedule') }
        { this.renderLine(name, 'directions-car') }
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

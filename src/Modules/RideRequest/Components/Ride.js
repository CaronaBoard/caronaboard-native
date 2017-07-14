/* @flow */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native'
import Styles from './Styles/RideStyles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { RkCard } from 'react-native-ui-kitten'

export class Ride extends Component {
  renderLine (subTitle, icon) {
    return (
      <View style={Styles.line} >
        <Icon name={icon} style={Styles.icon} />
        <Text rkCardText>{subTitle}</Text>
      </View>
    )
  }

  pushTestScreen (ride) {
    this.props.navigator.push({
      screen: 'carona.testScreen',
      title: 'Requesting a Ride',
      passProps: ride
    })
  }

  render () {
    const {
        origin,
        destination,
        days,
        hours,
        profile
     } = this.props.ride
    console.log(this.props.ride)
    return (
      <TouchableOpacity onPress={() => this.pushTestScreen(this.props.ride)}>
        <View>
          <RkCard>
            <View rkCardContent>
              <Text rkCardTitle>{destination}</Text>
              { this.renderLine(origin, 'radio-button-unchecked') }
              { this.renderLine(destination, 'radio-button-unchecked') }
            </View>
            <View rkCardContent>
              { this.renderLine(days, 'today') }
              { this.renderLine(hours, 'schedule') }
              { this.renderLine(profile.name, 'directions-car') }
            </View>
          </RkCard>
        </View>
      </TouchableOpacity>
    )
  }
}

Ride.propTypes = {
  ride: PropTypes.shape({
    days: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    hours: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    profile: PropTypes.shape({
      name: PropTypes.string.isRequired,
      contact: PropTypes.shape({
        kind: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number
        ]).isRequired
      })
    })
  }).isRequired
}

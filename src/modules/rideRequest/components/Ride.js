import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native'
import Styles from './styles/RideStyles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { RkCard } from 'react-native-ui-kitten'
import { screens } from '../../../navigation/Screens'
import { ridePropTypes } from '../types'

export class Ride extends Component {
  static propTypes = {
    ride: ridePropTypes,
    userId: PropTypes.string.isRequired
  }

  renderLine (subTitle, icon) {
    return (
      <View style={Styles.line} >
        <Icon name={icon} style={Styles.icon} />
        <Text rkCardText>{subTitle}</Text>
      </View>
    )
  }

  pushRideRequestScreen () {
    const { ride, userId } = this.props
    this.props.navigator.push({
      screen: screens.rideRequest.id,
      passProps: { ride, userId }
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

    return (
      <TouchableOpacity onPress={() => this.pushRideRequestScreen()}>
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

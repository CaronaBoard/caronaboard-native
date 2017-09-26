import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Styles from './styles/RideStyles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { RkCard } from 'react-native-ui-kitten'
import { screens } from '../../../navigation/Screens'
import { ridePropTypes } from '../types/index'

export class Ride extends Component {
  static propTypes = {
    ride: ridePropTypes
  }

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
      screen: screens.rideRequest.id,
      passProps: { ride }
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

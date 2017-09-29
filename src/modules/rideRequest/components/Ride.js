import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native'
import Styles from './styles/RideStyles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { RkCard } from 'react-native-ui-kitten'
import { ridePropTypes } from '../types'

export class Ride extends Component {
  static propTypes = {
    ride: ridePropTypes.isRequired,
    onPress: PropTypes.func.isRequired,
    icon: PropTypes.node
  }

  renderLine (subTitle, icon) {
    return (
      <View style={Styles.line} >
        <Icon name={icon} style={Styles.icon} />
        <Text rkCardText>{subTitle}</Text>
      </View>
    )
  }

  renderIcon = () => {
    const { icon } = this.props
    return icon || <View />
  }

  render () {
    const { ride } = this.props
    const {
        origin,
        destination,
        days,
        hours,
        profile
     } = ride

    return (
      <TouchableOpacity onPress={() => this.props.onPress({ ride })}>
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
          {this.renderIcon()}
        </RkCard>
      </TouchableOpacity>
    )
  }
}

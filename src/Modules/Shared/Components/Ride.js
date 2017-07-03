/* @flow */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native'
import Styles from './Styles/RideStyles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { RkCard } from 'react-native-ui-kitten'

export default class Ride extends Component {
  renderLine (subTitle, icon) {
    return (
      <View style={Styles.line} >
        <Icon name={icon} style={Styles.icon} />
        <Text rkCardText>{subTitle}</Text>
      </View>
    )
  }

  renderFlexible (flexible) {
    return flexible ? this.renderLine('Rota flexível', 'call-split') : <View />
  }

  render () {
    const {
        area,
        origin,
        destination,
        flexible,
        days,
        hours,
        name,
        formUrl
     } = this.props.ride

    return (
      <TouchableOpacity onPress={() => console.log('touched ' + formUrl)}>
        <View>
          <RkCard>
            <View rkCardContent>
              <Text rkCardTitle>{area}</Text>
              { this.renderLine(origin, 'radio-button-unchecked') }
              { this.renderLine(destination, 'radio-button-unchecked') }
              { this.renderFlexible(flexible) }
            </View>
            <View rkCardContent>
              { this.renderLine(days, 'today') }
              { this.renderLine(hours, 'schedule') }
              { this.renderLine(name, 'directions-car') }
            </View>
          </RkCard>
        </View>
      </TouchableOpacity>
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

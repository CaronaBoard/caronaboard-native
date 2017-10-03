import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native'

import Styles from './styles/RideOffer.style'
import { RkCard } from 'react-native-ui-kitten'
import { RidePropType } from '../../rideRequest/types'

export class RideOffer extends React.Component {
  static propTypes = {
    ride: RidePropType.isRequired,
    onPress: PropTypes.func.isRequired
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
      <TouchableOpacity onPress={() => this.props.onPress(this.props.ride)}>
        <RkCard>
          <View rkCardContent>
            <View style={Styles.line} >
              <Text rkCardText>{`${profile.name} está oferecendo uma carona`}</Text>
            </View>
            <View style={Styles.line} >
              <Text rkCardText>{`De: ${origin}`}</Text>
            </View>
            <View style={Styles.line} >
              <Text rkCardText>{`Para: ${destination}`}</Text>
            </View>
            <View style={Styles.line} >
              <Text rkCardText>{`Em: ${days}`}</Text>
            </View>
            <View style={Styles.line} >
              <Text rkCardText>{`As: ${hours}`}</Text>
            </View>
          </View>
        </RkCard>
      </TouchableOpacity>
    )
  }
}

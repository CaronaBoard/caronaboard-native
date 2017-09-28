import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Styles from './styles/RideOfferStyles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { RkCard } from 'react-native-ui-kitten'
import { ridePropTypes } from '../../rideRequest/types'

const renderLine = (text, icon) => {
  return (
    <View style={Styles.line} >
      <Icon name={icon} style={Styles.icon} />
      <Text rkCardText>{text}</Text>
    </View>
  )
}

export const RideOffer = props => {
  const {
    origin,
    destination,
    days,
    hours
  } = props.ride

  return (
    <TouchableOpacity>
      <RkCard>
        <View rkCardContent>
          { renderLine(origin, 'radio-button-unchecked') }
          { renderLine(destination, 'radio-button-unchecked') }
        </View>
        <View rkCardContent>
          { renderLine(days, 'today') }
          { renderLine(hours, 'schedule') }
        </View>
      </RkCard>
    </TouchableOpacity>
  )
}

RideOffer.propTypes = {
  ride: ridePropTypes
}

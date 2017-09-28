import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Styles from './styles/RideOfferStyles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { RkCard } from 'react-native-ui-kitten'
import { ridePropTypes } from '../../rideRequest/types'
import PropTypes from 'prop-types'

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
    hours,
    rideId
  } = props.ride

  return (
    <TouchableOpacity onPress={() => props.onPress(rideId)}>
      <RkCard>
        <View rkCardContent>
          { renderLine(origin, 'radio-button-unchecked') }
          { renderLine(destination, 'radio-button-unchecked') }
        </View>
        <View rkCardContent>
          { renderLine(days, 'today') }
          { renderLine(hours, 'schedule') }
        </View>
        <Icon
          name='delete-forever'
          size={30}
          color='#900'
          style={Styles.deleteIcon}
        />
      </RkCard>
    </TouchableOpacity>
  )
}

RideOffer.propTypes = {
  ride: ridePropTypes,
  onPress: PropTypes.func.isRequired
}

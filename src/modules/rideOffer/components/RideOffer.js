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

const onPress = (rideId: string) => {
  alert(`Deseja deletar ${rideId}?. (NAO IMPLEMENTADO)`)
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
    <TouchableOpacity onPress={() => onPress(rideId)}>
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

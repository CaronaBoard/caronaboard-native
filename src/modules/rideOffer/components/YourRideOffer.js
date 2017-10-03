import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { View, Text, TouchableOpacity } from 'react-native'

import Styles from './styles/YourRideOffer.style'
import { RkCard } from 'react-native-ui-kitten'
import { RidePropType } from '../../rideRequest/types'

export class YourRideOffer extends React.Component {
  static propTypes = {
    ride: RidePropType.isRequired,
    onPress: PropTypes.func.isRequired
  }

  onPress = () => {
    this.props.onPress(this.props.ride)
  }

  renderLine = (text, icon) => {
    return (
      <View style={Styles.line}>
        <Icon name={icon} style={Styles.icon} />
        <Text rkCardText>{text}</Text>
      </View>
    )
  }

  render () {
    const {
      origin,
      destination,
      days,
      hours
    } = this.props.ride

    return (
      <TouchableOpacity onPress={() => this.onPress()}>
        <RkCard>
          <View rkCardContent>
            <View style={Styles.line}>
              <Text rkCardText>
                {'Você está oferencendo carona'}
              </Text>
              <View style={Styles.line}>
                <Text rkCardText>
                  {`De: ${origin}`}
                </Text>
              </View>
              <Text rkCardText>
                {`Para: ${destination}`}
              </Text>
            </View>
            <Text rkCardText>
              {`Em: ${days}`}
            </Text>
            <View style={Styles.line}>
              <Text rkCardText>
                {`As: ${hours}`}
              </Text>
            </View>
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
}

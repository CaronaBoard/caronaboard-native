import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { View, Text, TouchableOpacity } from 'react-native'

import Styles from './styles/RideOffer.style'
import { RkCard } from 'react-native-ui-kitten'
import { RidePropType } from '../../rideRequest/types'
import { LoadingSpinnerView } from '../../shared/components/LoadingSpinnerView'

export class RideOffer extends React.Component {
  static propTypes = {
    ride: RidePropType.isRequired,
    onPress: PropTypes.func.isRequired
  }

  state = {
    loading: false
  }

  onPress = async (rideId) => {
    this.setState({loading: true})
    await this.props.onPress(rideId)
    this.setState({loading: false})
  }

  renderLine = (text, icon) => {
    return (
      <View style={Styles.line} >
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
      hours,
      rideId
    } = this.props.ride

    return (
      <LoadingSpinnerView isLoading={this.state.loading}>
        <TouchableOpacity onPress={() => this.onPress(rideId)}>
          <RkCard>
            <View rkCardContent>
              { this.renderLine(origin, 'radio-button-unchecked') }
              { this.renderLine(destination, 'radio-button-unchecked') }
            </View>
            <View rkCardContent>
              { this.renderLine(days, 'today') }
              { this.renderLine(hours, 'schedule') }
            </View>
            <Icon
              name='delete-forever'
              size={30}
              color='#900'
              style={Styles.deleteIcon}
            />
          </RkCard>
        </TouchableOpacity>
      </LoadingSpinnerView>
    )
  }
}

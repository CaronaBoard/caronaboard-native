import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { RkCard } from 'react-native-ui-kitten'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { View, Text, TouchableOpacity } from 'react-native'

import { RidePropType } from '../types'
import Styles from './styles/Ride.style'
import { LoadingSpinnerView } from '../../shared/components/LoadingSpinnerView'

export class Ride extends Component {
  static propTypes = {
    ride: RidePropType.isRequired,
    onPress: PropTypes.func.isRequired,
    icon: PropTypes.node
  }

  state = {
    loading: false
  }

  onPress = async (ride) => {
    this.setState({loading: true})
    await this.props.onPress(ride)
    this.setState({loading: false})
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
      <LoadingSpinnerView isLoading={this.state.loading} >
        <TouchableOpacity onPress={() => this.onPress({ ride })}>
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
      </LoadingSpinnerView>
    )
  }
}

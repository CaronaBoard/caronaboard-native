import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Styles from './styles/Ride.style'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { RkCard } from 'react-native-ui-kitten'
import { RidePropType } from '../types'
import { LoadingSpinnerView } from '../../shared/components/LoadingSpinnerView'

export class RideRequest extends Component {
  static propTypes = {
    ride: RidePropType.isRequired
  }

  onPress = async () => {
    this.setState({loading: true})
    await this.props.onPress()
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

  render () {
    const {
      origin,
      destination,
      days,
      hours,
      profile
    } = this.props.ride

    return (
      <LoadingSpinnerView isLoading={this.state.loading}>
        <TouchableOpacity onPress={() => this.onPress()}>
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
      </LoadingSpinnerView>
    )
  }
}

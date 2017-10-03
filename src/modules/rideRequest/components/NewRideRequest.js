import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import Styles from './styles/Ride.style'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { RkCard } from 'react-native-ui-kitten'
import { RidePropType } from '../types'
import { GradientButton } from '../../shared/components'
import styles from './styles/RideRequest.style'
import { LoadingSpinnerView } from '../../shared/components/LoadingSpinnerView'

export class NewRideRequest extends Component {
  static propTypes = {
    ride: RidePropType.isRequired,
    saveRideRequest: PropTypes.func.isRequired
  }

  state = {
    loading: false
  }

  onPress = async (rideId) => {
    this.setState({loading: true})
    await this.props.saveRideRequest(rideId)
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
      profile,
      rideId
    } = this.props.ride

    return (
      <LoadingSpinnerView isLoading={this.state.loading} style={styles.flexible}>
        <View style={styles.container}>
          <View style={styles.inputTextsContainer}>
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
          </View>
        </View>
        <View style={styles.centralized}>
          <GradientButton
            rkType='large'
            text={'Ask for a ride'}
            onPress={() => this.onPress(rideId)}
          />
        </View>
      </LoadingSpinnerView>
    )
  }
}

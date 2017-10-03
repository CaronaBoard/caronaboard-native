import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import Styles from './styles/Ride.style'
import { RkText } from 'react-native-ui-kitten'
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
    console.log(rideId, 'is ===> rideId')
    this.setState({loading: true})
    await this.props.saveRideRequest(rideId)
    this.setState({loading: false})
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
          <View>
            <View rkCardContent>
              <View style={Styles.line} >
                <RkText rkType='header'>{`${profile.name} está oferecendo uma carona`}</RkText>
              </View>
              <View style={Styles.line} >
                <RkText rkType='info'>{`De: ${origin}`}</RkText>
              </View>
              <View style={Styles.line} >
                <RkText rkType='info'>{`Para: ${destination}`}</RkText>
              </View>
              <View style={Styles.line} >
                <RkText rkType='info'>{`Em: ${days}`}</RkText>
              </View>
              <View style={Styles.line} >
                <RkText rkType='info'>{`As: ${hours}`}</RkText>
              </View>
            </View>
          </View>
          <View style={styles.centralized}>
            <GradientButton
              rkType='large'
              text={'Pedir Carona'}
              onPress={() => this.onPress(rideId)}
            />
          </View>
        </View>
      </LoadingSpinnerView>
    )
  }
}

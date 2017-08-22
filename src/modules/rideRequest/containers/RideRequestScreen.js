import React, { Component } from 'react'
import { View } from 'react-native'

import { GradientButton } from '../../shared/components'
import { Ride, ridePropTypes } from '../components/Ride'
import { saveRideRequest } from '../../../services/firebase'
import styles from './styles/RideRequestScreenStyles'

export class RideOfferScreen extends Component {
  render () {
    const { ride } = this.props
    return (
      <View style={styles.flexible}>
        <View style={styles.container}>
          <View style={styles.inputTextsContainer}>
            <Ride ride={ride} />
          </View>
        </View>
        <View style={styles.centralized}>
          <GradientButton
            rkType='large'
            text={'SAVE'}
            onPress={this.onButtonSubmit}
          />
        </View>
        <View style={styles.centralized}>
          <GradientButton
            rkType='large'
            text={'SAVE'}
            onPress={() => saveRideRequest(ride.rideId)}
          />
        </View>
      </View>
    )
  }
}

RideOfferScreen.propTypes = ridePropTypes

export default RideOfferScreen

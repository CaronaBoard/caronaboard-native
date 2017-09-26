import React, { Component } from 'react'
import { View } from 'react-native'

import { GradientButton } from '../../shared/components'
import { Ride } from '../components/Ride'
import { saveRideRequest } from '../../../services/firebase'
import { ridePropTypes } from '../types/index'
import styles from './styles/RideRequestScreenStyles'

export class RideRequestScreen extends Component {
  static propTypes = {
    ride: ridePropTypes
  }

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
            onPress={() => saveRideRequest(ride.rideId)}
          />
        </View>
      </View>
    )
  }
}

export default RideRequestScreen

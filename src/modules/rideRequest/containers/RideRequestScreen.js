import React, { Component } from 'react'
import { View } from 'react-native'

import { Button } from '../../shared/components'
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
          <Button text='Ask for a Ride' onPress={() => saveRideRequest(ride.rideId)} />
        </View>
      </View>
    )
  }
}

RideOfferScreen.propTypes = ridePropTypes

export default RideOfferScreen

import React, { Component } from 'react'
import { View } from 'react-native'

import { Button } from '../../Shared/Components'
import { Ride, ridePropTypes } from '../Components/Ride'
import { saveRideRequest } from '../../../Services/Firebase'
import styles from './Styles/RideRequestScreenStyles'

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

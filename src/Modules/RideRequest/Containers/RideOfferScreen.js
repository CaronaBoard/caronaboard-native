import React, { Component } from 'react'
import { View } from 'react-native'
import { RkText } from 'react-native-ui-kitten'

import { Button, TextInput } from '../../Shared/Components'
import { saveRideOffer } from '../../../Services/Firebase'
import styles from './Styles/RideOfferScreenStyles'

export class RideOfferScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      rideOrigin: '',
      rideDestination: '',
      rideDays: '',
      rideHour: ''
    }
  }

  render () {
    return (
      <View style={styles.flexible}>
        <View style={styles.container}>
          <RkText style={styles.title}>
            Ride Offer
          </RkText>
          <View style={styles.inputTextsContainer}>
            <TextInput label='ORIGIN' onChangeText={(rideOrigin) => this.setState({rideOrigin})} />
            <TextInput label='DESTINATION' onChangeText={(rideDestination) => this.setState({rideDestination})} />
            <TextInput label='DAYS' onChangeText={(rideDays) => this.setState({rideDays})} />
            <TextInput label='HOUR' onChangeText={(rideHour) => this.setState({rideHour})} />
          </View>
          <Button text='Offer Ride' onPress={() => saveRideOffer(this.state)} />
        </View>
      </View>
    )
  }
}

export default RideOfferScreen

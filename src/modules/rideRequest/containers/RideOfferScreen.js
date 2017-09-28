import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { RkText } from 'react-native-ui-kitten'

import { onNavigatorEvent } from '../../../navigation/NavBar'
import { Button, TextInput } from '../../shared/components'
import { saveRideOffer } from '../../../services/firebase'
import styles from './styles/RideOfferScreenStyles'

export const INITIAL_STATE = {
  origin: '',
  destination: '',
  days: '',
  hours: ''
}

export class RideOfferScreen extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    userId: PropTypes.string.isRequired
  }

  constructor (props) {
    super(props)
    this.state = INITIAL_STATE
    this.props.navigator.setOnNavigatorEvent(onNavigatorEvent.bind(this))
  }

  offerRide = async (ride) => {
    const rideOffer = await saveRideOffer(ride)
    if (rideOffer) {
      alert('Success')
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
            <TextInput placeholder='ORIGIN' onChangeText={(origin) => this.setState({origin})} />
            <TextInput placeholder='DESTINATION' onChangeText={(destination) => this.setState({destination})} />
            <TextInput placeholder='DAYS' onChangeText={(days) => this.setState({days})} />
            <TextInput placeholder='HOUR' onChangeText={(hours) => this.setState({hours})} />
          </View>
          <Button text='Offer Ride' onPress={() => this.offerRide(this.state)} />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userData.uid
  }
}

export default connect(mapStateToProps)(RideOfferScreen)

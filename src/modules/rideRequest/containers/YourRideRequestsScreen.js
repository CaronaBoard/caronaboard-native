import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FlatList, Alert } from 'react-native'
import { onNavigatorEvent } from '../../../navigation/NavBar'
import {
  getUserRideRequests, removeDuplicatedRequests,
  removeRideRequest
} from '../../../services/firebase/database/RideRequest'
import { findRideOfferById } from '../../../services/firebase/database/RideOffer'
import { Ride } from '../components/Ride'

export const INITIAL_STATE = {
  rides: [],
  rideRequestsMap: {}
}

export class YourRideOffersScreen extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
  }

  state = INITIAL_STATE

  constructor (props) {
    super(props)
    this.props.navigator.setOnNavigatorEvent(onNavigatorEvent.bind(this))
  }

  async componentDidMount () {
    const rideRequests = await getUserRideRequests(this.props.profile.uid)
    const rideRequestsMap = await removeDuplicatedRequests(rideRequests)
    const rideOffersPromises = rideRequests.map(({ rideId }) => findRideOfferById(rideId))
    const rides = await Promise.all(rideOffersPromises)
    this.setState({rides, rideRequestsMap})
  }

  onPressRide = (props) => {
    const { rideRequestsMap } = this.state
    const { rideId } = props.ride
    const rideRequest = rideRequestsMap[rideId]
    Alert.alert(
      'Delete Ride Request',
      'Just a confirmation whether you wanna delete this ride or not.',
      [
        {
          text: 'Sure thing, delete!',
          style: 'destructive',
          onPress: () => removeRideRequest(rideRequest)
        },
        {
          text: 'Not yet, Thanks',
          style: 'cancel'
        }
      ],
      { cancelable: true }
    )
  }

  render () {
    return (
      <FlatList
        data={this.state.rides}
        keyExtractor={({rideId}) => rideId}
        renderItem={({ item }) => <Ride ride={item} onPress={this.onPressRide} />}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.auth.profile
  }
}

export default connect(mapStateToProps)(YourRideOffersScreen)

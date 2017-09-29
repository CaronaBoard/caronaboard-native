import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FlatList, View, Alert } from 'react-native'
import { FloatingActionButton } from '../../shared/components/FloatingActionButton'
import { onNavigatorEvent } from '../../../navigation/NavBar'
import { getUserRideRequests, removeDuplicatedRequests } from '../../../services/firebase/database/RideRequest'
import { findRideOfferById } from '../../../services/firebase/database/RideOffer'
import { Ride } from '../components/Ride'

export const INITIAL_STATE = {
  rides: []
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
    await removeDuplicatedRequests(rideRequests)
    const rideOffersPromises = rideRequests.map(({ rideId }) => findRideOfferById(rideId))
    const rides = await Promise.all(rideOffersPromises)
    this.setState({rides})
  }

  onPressRide = (props) => {
    Alert.alert(
      'Delete Ride Request',
      'Just a confirmation whether you wanna delete this ride or not.',
      [
        {
          text: 'Sure thing, delete!',
          style: 'destructive',
          onPress: () => console.log(props.ride.rideId, 'is ===> riderideId')
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
      <View style={{flex: 1}}>
        <FlatList
          data={this.state.rides}
          keyExtractor={({rideId}) => rideId}
          renderItem={({ item }) => <Ride ride={item} onPress={this.onPressRide} />}
        />
        <FloatingActionButton
          icon='md-create'
          onPress={() => this.pushRideRequestScreen()}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.auth.profile
  }
}

export default connect(mapStateToProps)(YourRideOffersScreen)

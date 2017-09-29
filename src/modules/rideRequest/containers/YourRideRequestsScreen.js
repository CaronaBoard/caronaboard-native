import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FlatList } from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Ride } from '../components/Ride'
import { alert } from '../../../navigation/Alert'
import { onNavigatorEvent } from '../../../navigation/NavBar'
import { findRideOfferById } from '../../../services/firebase/database/RideOffer'
import {
  getUserRideRequests,
  removeDuplicatedRequests,
  removeRideRequest
} from '../../../services/firebase/database/RideRequest'

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

  renderDeleteIcon = () => {
    const style = {
      alignSelf: 'flex-end'
    }

    return (
      <Icon
        name='delete-forever'
        size={30}
        color='#900'
        style={style}
      />
    )
  }

  onPressRide = (props) => {
    const { rideRequestsMap } = this.state
    const { rideId } = props.ride
    const rideRequest = rideRequestsMap[rideId]
    alert('Delete Ride Request', () => removeRideRequest(rideRequest))
  }

  render () {
    return (
      <FlatList
        data={this.state.rides}
        keyExtractor={({rideId}) => rideId}
        renderItem={({ item }) => <Ride ride={item} onPress={this.onPressRide} icon={this.renderDeleteIcon()} />}
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

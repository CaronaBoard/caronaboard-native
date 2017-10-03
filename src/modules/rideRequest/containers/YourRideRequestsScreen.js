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
import { LoadingSpinnerView } from '../../shared/components/LoadingSpinnerView'

export const INITIAL_STATE = {
  rides: [],
  rideRequestsMap: {},
  loading: false
}

export class YourRideOffersScreen extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    uid: PropTypes.string.isRequired
  }

  state = INITIAL_STATE

  constructor (props) {
    super(props)
    this.props.navigator.setOnNavigatorEvent(onNavigatorEvent.bind(this))
  }

  async componentDidMount () {
    this.setState({loading: true})
    const rideRequests = await getUserRideRequests(this.props.uid)
    const rideRequestsMap = await removeDuplicatedRequests(rideRequests)
    const rideOffersPromises = rideRequests.map(({ rideId }) => findRideOfferById(rideId))
    const rides = await Promise.all(rideOffersPromises)
    this.setState({rides, rideRequestsMap})
    this.setState({loading: false})
  }

  async componentDidUpdate (prevProps) {
    if (prevProps.uid !== this.props.uid) {
      await this.componentDidMount()
    }
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
      <LoadingSpinnerView isLoading={this.state.loading}>
        <FlatList
          data={this.state.rides}
          keyExtractor={({rideId}) => rideId}
          renderItem={({ item }) => <Ride ride={item} onPress={this.onPressRide} icon={this.renderDeleteIcon()} />}
        />
      </LoadingSpinnerView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    uid: state.auth.profile.uid
  }
}

export default connect(mapStateToProps)(YourRideOffersScreen)

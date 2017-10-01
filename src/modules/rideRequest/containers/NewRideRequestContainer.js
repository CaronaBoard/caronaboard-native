import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NewRideRequest } from '../components/NewRideRequest'
import { RidePropType } from '../types'
import { saveRideRequest } from '../../../services/firebase'

export class RideRequestScreen extends Component {
  static propTypes = {
    ride: RidePropType.isRequired,
    userId: PropTypes.string.isRequired
  }

  askForRide = (rideId: string) => async () => {
    const ride = await saveRideRequest(rideId, this.props.userId)
    if (ride) {
      alert('Success')
    }
  }

  render () {
    return (
      <NewRideRequest
        ride={this.props.ride}
        saveRideRequest={this.askForRide}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userData.uid
  }
}

export default connect(mapStateToProps)(RideRequestScreen)

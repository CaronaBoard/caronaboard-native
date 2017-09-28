import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { RideRequest } from '../components/RideRequest'
import { ridePropTypes } from '../types'
import { saveRideRequest } from '../../../services/firebase'

// TODO: Revisit, make sure that this should be a container ninstead of a component
export class RideRequestScreen extends Component {
  static propTypes = {
    ride: ridePropTypes,
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
      <RideRequest ride={this.props.ride} saveRideRequest={this.askForRide} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userData.uid
  }
}

export default connect(mapStateToProps)(RideRequestScreen)

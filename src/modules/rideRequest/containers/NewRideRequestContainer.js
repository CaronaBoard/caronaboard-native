import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NewRideRequest } from '../components/NewRideRequest'
import { RidePropType } from '../types'
import { saveRideRequest } from '../../../services/firebase'
import { fetchYourRideRequests } from '../../../redux/actions/async/RideRequestActions'

export class RideRequestScreen extends Component {
  static propTypes = {
    ride: RidePropType.isRequired,
    updateYourRequests: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired
  }

  newRideRequest = async (rideId: string) => {
    const { updateYourRequests, userId } = this.props
    try {
      await saveRideRequest(rideId, this.props.userId)
      await updateYourRequests(userId)
      alert('Success')
    } catch (error) {
      alert('Error')
    }
  }

  render () {
    return (
      <NewRideRequest
        ride={this.props.ride}
        saveRideRequest={this.newRideRequest}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userData.uid
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateYourRequests: uid => dispatch(fetchYourRideRequests(uid))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RideRequestScreen)

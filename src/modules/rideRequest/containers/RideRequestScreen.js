import React, { Component } from 'react'
import { RideRequest } from '../components/RideRequest'
import { ridePropTypes } from '../types/index'

export class RideRequestScreen extends Component {
  static propTypes = {
    ride: ridePropTypes
  }

  render () {
    return (
      <RideRequest ride={this.props.ride} />
    )
  }
}

export default RideRequestScreen

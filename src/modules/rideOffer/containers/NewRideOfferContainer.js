import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { onNavigatorEvent } from '../../../navigation/NavBar'
import { saveRideOffer } from '../../../services/firebase'
import { NewRideOffer } from '../components/NewRideOffer'
import { fetchYourRideOffers } from '../../../redux/actions/async/RideOfferActions'

export class NewRideOfferContainer extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    updateYourOffers: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired
  }

  constructor (props) {
    super(props)
    this.props.navigator.setOnNavigatorEvent(onNavigatorEvent.bind(this))
  }

  offerRide = async (rideOffer) => {
    const { updateYourOffers, userId } = this.props
    try {
      await saveRideOffer(rideOffer, this.props.userId)
      await updateYourOffers(userId)
      alert('Success')
    } catch (error) {
      alert('Error')
    }
  }

  render () {
    return <NewRideOffer onPress={this.offerRide} />
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userData.uid
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateYourOffers: uid => dispatch(fetchYourRideOffers(uid))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewRideOfferContainer)

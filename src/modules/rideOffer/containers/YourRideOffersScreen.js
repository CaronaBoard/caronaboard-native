import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { FlatList, View } from 'react-native'

import { alert } from '../../../navigation/Alert'
import { RideOffer } from '../components/RideOffer'
import { screens } from '../../../navigation/Screens'
import { onNavigatorEvent } from '../../../navigation/NavBar'
import { FloatingActionButton } from '../../shared/components/FloatingActionButton'
import {
  getUserRideOffers,
  removeRideOffer
} from '../../../services/firebase/database/RideOffer'
import { updateYourRideOffers } from '../../../redux/actions/sync/RideOfferActions'

export class YourRideOffersScreen extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    uid: PropTypes.string.isRequired,
    updateYourOffers: PropTypes.func.isRequired,
    yourOffers: PropTypes.array.isRequired
  }

  constructor (props) {
    super(props)
    this.props.navigator.setOnNavigatorEvent(onNavigatorEvent.bind(this))
  }

  async componentDidUpdate (prevProps) {
    const { uid, updateYourOffers } = this.props
    if (uid && prevProps.uid !== uid) {
      const rides = await getUserRideOffers(uid)
      updateYourOffers(rides)
    }
  }

  pushRideRequestScreen () {
    this.props.navigator.push({screen: screens.rideOffer.id})
  }

  onPressRide = (rideId: string) => {
    const { uid } = this.props.profile
    alert('Delete Ride Offer', () => removeRideOffer(rideId, uid))
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={this.props.yourOffers}
          keyExtractor={item => item.rideId}
          renderItem={({ item }) => <RideOffer ride={item} onPress={this.onPressRide} />}
        />
        <FloatingActionButton
          icon='md-create'
          onPress={() => this.pushRideRequestScreen()}
        />
      </View>

    )
  }
}

const mapStateToProps = state => {
  return {
    uid: state.auth.profile.uid,
    yourOffers: state.ride.yourOffers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateYourOffers: rides => dispatch(updateYourRideOffers(rides))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(YourRideOffersScreen)

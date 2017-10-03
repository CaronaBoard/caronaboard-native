import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { FlatList } from 'react-native'

import { alert } from '../../../navigation/Alert'
import { screens } from '../../../navigation/Screens'
import { onNavigatorEvent } from '../../../navigation/NavBar'
import { FloatingActionButton } from '../../shared/components/FloatingActionButton'
import { removeRideOffer } from '../../../services/firebase/database/RideOffer'
import { LoadingSpinnerView } from '../../shared/components/LoadingSpinnerView'
import { fetchYourRideOffers } from '../../../redux/actions/async/RideOfferActions'
import { YourRideOffer } from '../components/YourRideOffer'

export class YourRideOffersScreen extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    uid: PropTypes.string.isRequired,
    updateYourOffers: PropTypes.func.isRequired,
    yourOffers: PropTypes.array.isRequired
  }

  state = {
    loading: false
  }

  constructor (props) {
    super(props)
    this.props.navigator.setOnNavigatorEvent(onNavigatorEvent.bind(this))
  }

  async componentDidUpdate (prevProps) {
    const { uid, updateYourOffers } = this.props
    if (uid && prevProps.uid !== uid) {
      this.setState({loading: true})
      await updateYourOffers(uid)
      this.setState({loading: false})
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
      <LoadingSpinnerView isLoading={this.state.loading}>
        <FlatList
          data={this.props.yourOffers}
          keyExtractor={item => item.rideId}
          renderItem={({ item }) => <YourRideOffer ride={item} onPress={this.onPressRide} />}
        />
        <FloatingActionButton
          icon='md-create'
          onPress={() => this.pushRideRequestScreen()}
        />
      </LoadingSpinnerView>
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
    updateYourOffers: uid => dispatch(fetchYourRideOffers(uid))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(YourRideOffersScreen)

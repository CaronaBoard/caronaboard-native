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

// TODO: This should've be on redux
export const INITIAL_STATE = {
  rides: []
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
    const rides = await getUserRideOffers(this.props.uid)
    this.setState({rides})
  }

  componentDidUpdate (prevProps) {
    if (prevProps.uid !== this.props.uid) {
      this.componentDidMount()
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
          data={this.state.rides}
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

const mapStateToProps = (state) => {
  return {
    uid: state.auth.profile.uid
  }
}

export default connect(mapStateToProps)(YourRideOffersScreen)

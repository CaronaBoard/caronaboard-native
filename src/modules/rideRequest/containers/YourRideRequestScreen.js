import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FlatList, View, Alert } from 'react-native'
import { RideOffer } from '../components/RideOffer'
import { getUserRideOffers, removeRideOffer } from '../../../services/firebase/database/RideOffer'
import { FloatingActionButton } from '../../shared/components/FloatingActionButton'
import { screens } from '../../../navigation/Screens'
import { onNavigatorEvent } from '../../../navigation/NavBar'

export const INITIAL_STATE = {
  rides: []
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
    const rides = await getUserRideOffers(this.props.profile.uid)
    this.setState({rides})
  }

  pushRideRequestScreen () {
    this.props.navigator.push({screen: screens.rideOffer.id})
  }

  onPressRide = (rideId: string) => {
    Alert.alert(
      'Delete Ride Offer',
      'Just a confirmation whether you wanna delete this ride or not.',
      [
        {
          text: 'Sure thing, delete!',
          style: 'destructive',
          onPress: () => removeRideOffer(rideId, this.props.profile.uid)
        },
        {
          text: 'Not yet, Thanks',
          style: 'cancel'
        }
      ],
      { cancelable: true }
    )
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={this.state.rides}
          keyExtractor={item => item.rideId}
          renderItem={({ item }) => (<RideOffer ride={item} onPress={this.onPressRide} />)}
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
    profile: state.auth.profile
  }
}

export default connect(mapStateToProps)(YourRideOffersScreen)

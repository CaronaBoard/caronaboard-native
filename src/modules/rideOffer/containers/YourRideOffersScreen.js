import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FlatList, View } from 'react-native'
import { RideOffer } from '../components/RideOffer'
import { getUserRideOffers } from '../../../services/firebase/database/RideOffer'
import { FloatingActionButton } from '../../shared/components/FloatingActionButton'

export const INITIAL_STATE = {
  rides: []
}

export class YourRideOffersScreen extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
  }

  componentDidMount = async () => {
    const rides = await getUserRideOffers(this.props.profile.uid)
    console.log(rides, 'is ===> rides')
    this.setState({rides})
  }

  state = INITIAL_STATE

  render () {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={this.state.rides}
          keyExtractor={item => item.rideId}
          renderItem={({ item }) => (<RideOffer ride={item} />)}
        />
        <FloatingActionButton onPress={() => alert('Clicado')} />
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

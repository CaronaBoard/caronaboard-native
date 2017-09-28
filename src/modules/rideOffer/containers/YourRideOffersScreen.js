import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FlatList } from 'react-native'
import { RideOffer } from '../components/RideOffer'
import { getUserRideOffers } from '../../../services/firebase/database/RideOffer'

export class YourRideOffersScreen extends Component {
  componentDidMount = async () => {
    const rides = await getUserRideOffers(this.props.profile.uid)
    this.setState({rides})
  }

  render () {
    return (
      <FlatList
        data={this.state.rides}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (<RideOffer ride={item} />)}
      />
    )
  }
}

YourRideOffersScreen.propTypes = {
  profile: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    profile: state.auth.userData.profile
  }
}

export default connect(mapStateToProps)(YourRideOffersScreen)

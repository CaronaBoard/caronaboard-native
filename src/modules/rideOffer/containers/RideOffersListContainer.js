import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ListView } from 'react-native'
import React, { Component } from 'react'

import { RidePropType } from '../../rideRequest/types/index'
import { Ride } from '../../rideRequest/components/Ride'
import { screens } from '../../../navigation/Screens'
import { fetchAllRideOffers } from '../../../redux/actions/index'
import { onNavigatorEvent } from '../../../navigation/NavBar'
import { LoadingSpinnerView } from '../../shared/components/LoadingSpinnerView'

export class RideList extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    rides: PropTypes.arrayOf(RidePropType),
    userId: PropTypes.string.isRequired
  }

  state = {
    loading: false
  }

  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id})
    this.props.navigator.setOnNavigatorEvent(onNavigatorEvent.bind(this))
    this.state = {dataSource: ds.cloneWithRows(this.props.rides)}
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.rides.length !== this.props.rides.length) {
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id})
      this.setState({dataSource: ds.cloneWithRows(nextProps.rides)})
    }
  }

  async componentDidUpdate (prevProps) {
    const { userId, fetchRides } = this.props
    if (userId && prevProps.userId !== userId) {
      this.setState({loading: true})
      await fetchRides()
      this.setState({loading: false})
    }
  }

  onPress = (props) => {
    const { userId, navigator } = this.props
    navigator.push({
      screen: screens.rideRequest.id,
      passProps: {...props, userId}
    })
  }

  render () {
    return (
      <LoadingSpinnerView isLoading={this.state.loading}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(ride) => <Ride ride={ride} onPress={this.onPress} />}
          enableEmptySections
        />
      </LoadingSpinnerView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rides: state.ride.offers,
    userId: state.auth.userData.uid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRides: () => dispatch(fetchAllRideOffers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RideList)

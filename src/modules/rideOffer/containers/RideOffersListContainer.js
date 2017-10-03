import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ListView } from 'react-native'
import React, { Component } from 'react'

import { RideOffer } from '../components/RideOffer'
import { screens } from '../../../navigation/Screens'
import { RidePropType } from '../../rideRequest/types'
import { fetchAllRideOffers } from '../../../redux/actions'
import { onNavigatorEvent } from '../../../navigation/NavBar'
import { LoadingSpinnerView } from '../../shared/components/LoadingSpinnerView'

export class RideList extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    rides: PropTypes.arrayOf(RidePropType).isRequired,
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

  async componentDidMount () {
    const { userId, fetchRides } = this.props
    if (userId) {
      this.setState({loading: true})
      await fetchRides()
      this.setState({loading: false})
    }
  }

  async componentDidUpdate (prevProps) {
    const { userId } = this.props
    if (userId && prevProps.userId !== userId) {
      await this.componentDidMount()
    }
  }

  onPress = (ride) => {
    const { navigator } = this.props
    navigator.push({
      screen: screens.rideRequest.id,
      title: screens.rideRequest.title,
      passProps: {ride}
    })
  }

  render () {
    return (
      <LoadingSpinnerView isLoading={this.state.loading}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(ride) => <RideOffer ride={ride} onPress={this.onPress} />}
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

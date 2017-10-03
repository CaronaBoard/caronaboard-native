import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FlatList } from 'react-native'
import React, { Component } from 'react'

import { alert } from '../../../navigation/Alert'
import { onNavigatorEvent } from '../../../navigation/NavBar'
import { removeRideRequest } from '../../../services/firebase/database/RideRequest'
import { LoadingSpinnerView } from '../../shared/components/LoadingSpinnerView'
import { fetchYourRideRequests } from '../../../redux/actions/async/RideRequestActions'
import { YourRideRequest } from '../components/YourRideRequest'

export const INITIAL_STATE = {
  loading: false
}

export class YourRideRequestsScreen extends Component {
  static propTypes = {
    updateYourRequests: PropTypes.func.isRequired,
    yourRideRequests: PropTypes.array.isRequired,
    rideRequestsMap: PropTypes.object.isRequired,
    navigator: PropTypes.object.isRequired,
    uid: PropTypes.string.isRequired
  }

  state = INITIAL_STATE

  constructor (props) {
    super(props)
    this.props.navigator.setOnNavigatorEvent(onNavigatorEvent.bind(this))
  }

  async componentDidMount () {
    const { uid } = this.props
    if (uid) {
      this.setState({loading: true})
      await this.props.updateYourRequests()
      this.setState({loading: false})
    }
  }

  async componentDidUpdate (prevProps) {
    if (prevProps.uid !== this.props.uid) {
      await this.componentDidMount()
    }
  }

  onPressRide = (props) => {
    const { rideRequestsMap } = this.props
    const { rideId } = props.ride
    const rideRequest = rideRequestsMap[rideId]
    alert('Apagar pedido de carona?', () => removeRideRequest(rideRequest))
  }

  render () {
    return (
      <LoadingSpinnerView isLoading={this.state.loading}>
        <FlatList
          data={this.props.yourRideRequests}
          keyExtractor={({rideId}) => rideId}
          renderItem={({ item }) => <YourRideRequest ride={item} onPress={this.onPressRide} />}
        />
      </LoadingSpinnerView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    uid: state.auth.profile.uid,
    yourRideRequests: state.ride.requests,
    rideRequestsMap: state.ride.requestsIdMap
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateYourRequests: uid => dispatch(fetchYourRideRequests(uid))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(YourRideRequestsScreen)

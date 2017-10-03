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
import ValidatedScreen from '../../shared/containers/ValidatedScreen'
import { getActiveGroup } from '../../../services/firebase/database/Groups'

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
    if (uid && getActiveGroup()) {
      this.setState({loading: true})
      await this.props.updateYourRequests(uid)
      this.setState({loading: false})
    }
  }

  async componentDidUpdate (prevProps) {
    if (prevProps.uid !== this.props.uid) {
      await this.componentDidMount()
    }
  }

  onPressRide = async (props) => {
    const { rideRequestsMap } = this.props
    const { rideId } = props.ride
    const rideRequest = rideRequestsMap[rideId]
    const callback = async () => {
      await removeRideRequest(rideRequest)
      await this.componentDidMount()
    }
    alert('Apagar pedido de carona?', () => callback())
  }

  render () {
    return (
      <ValidatedScreen>
        <LoadingSpinnerView isLoading={this.state.loading}>
          <FlatList
            data={this.props.yourRideRequests}
            keyExtractor={({rideId}) => rideId}
            renderItem={({ item }) => <YourRideRequest ride={item} onPress={this.onPressRide} />}
          />
        </LoadingSpinnerView>
      </ValidatedScreen>
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

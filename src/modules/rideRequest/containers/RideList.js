
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ListView } from 'react-native'
import { fetchAllRides } from '../../../redux/actions'
import { connect } from 'react-redux'
import { Ride } from '../components/Ride'
import { ridePropTypes } from '../types'
import { onNavigatorEvent } from '../../../navigation/NavBar'
import styles from './styles/RideListStyles'
import { screens } from '../../../navigation/Screens'

export class RideList extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    rides: PropTypes.arrayOf(ridePropTypes),
    userId: PropTypes.string.isRequired
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

  componentDidMount () {
    this.props.fetchRides()
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
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(ride) => <Ride ride={ride} onPress={this.onPress} />}
        enableEmptySections
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rides: state.rideOffer.rides,
    userId: state.auth.userData.uid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRides: () => dispatch(fetchAllRides())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RideList)


import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ListView } from 'react-native'
import { fetchAllRides } from '../../../redux/actions'
import { connect } from 'react-redux'
import { screens } from '../../../navigation/Screens'
import { Ride, ridePropTypes } from '../components/Ride'
import styles from './styles/RideListStyles'

export class RideList extends Component {
  static navigatorButtons = {
    rightButtons: [
      {
        icon: require('../../../assets/images/swap@1x.png'),
        id: 'profile-button',
        testID: 'profile-button'
      }
    ]
  }

  static propTypes = {
    navigator: PropTypes.object.isRequired,
    rides: PropTypes.arrayOf(ridePropTypes)
  }

  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id})
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent)
    this.state = {dataSource: ds.cloneWithRows(this.props.rides)}
  }

  onNavigatorEvent = (event) => {
    const { type, id } = event
    if (type === 'NavBarButtonPress' && id === 'profile-button') {
      this.props.navigator.push({screen: screens.profile.id})
    }
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

  render () {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(ride) => <Ride ride={ride} navigator={this.props.navigator} />}
        enableEmptySections
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rides: state.rideOffer.rides
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRides: () => dispatch(fetchAllRides())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RideList)

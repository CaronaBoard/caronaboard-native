
import React, { Component } from 'react'
import { ListView, StyleSheet } from 'react-native'
import { fetchAllRides } from '../../../redux/actions'
import { connect } from 'react-redux'
import { screens } from '../../../configuration/navigation/Screens'

import { Ride } from '../components/Ride'


// TODO: REFACTOR
export class RideList extends Component {

  static navigatorButtons = {
    rightButtons: [
      {
        icon: require('../../../assets/images/swap@1x.png'),
        id: 'profile-button',
        testID: 'profile-button'
      }
    ]
  };

  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id})
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
    this.state = {
      dataSource: ds.cloneWithRows(this.props.rides)
    }
  }

  onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
    const { type, id } = event
    if (type === 'NavBarButtonPress' && id === 'profile-button') {
      this.props.navigator.push({ screen: screens.profile.id })
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.rides.length !== this.props.rides.length) {
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id})
      this.setState({
        dataSource: ds.cloneWithRows(nextProps.rides)
      })
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  }
})

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

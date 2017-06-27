
import React, { Component } from 'react'
import { ListView, StyleSheet } from 'react-native'
import Ride from '../Components/Ride'

export default class RideList extends Component {
  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id})
    this.state = {
      dataSource: ds.cloneWithRows(props.rides)
    }
  }

  render () {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(ride) => <Ride ride={ride} />}
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


import React, { Component } from 'react'
import { View, ListView, StyleSheet } from 'react-native'
import Ride from '../Components/Ride'

var ride = {
  'area': 'Aeroporto',
  'days': 'Seg a Sex',
  'destination': 'Rodoviaria',
  'flexible': true,
  'formUrl': 'https://goo.gl/forms/',
  'hours': '19h',
  'name': 'Hugh Jackman',
  'origin': 'Tecnopuc'
}

export default class RideList extends Component {
  constructor () {
    super()
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows([{...ride, id: 1}, {...ride, id: 2}, {...ride, id: 3}, {...ride, id: 4}, {...ride, id: 5}, {...ride, id: 6}])
    }
  }

  render () {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(ride) => <Ride ride={ride} />}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#F7F7F7'
  }
})

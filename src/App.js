/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import RideList from './Containers/RideList'
import {
  StyleSheet,
  View
} from 'react-native'
import Kitten from './Themes/Kitten'
import { getAllRides } from './Services/Firebase'

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

var mockedRides = [{...ride, id: 1}, {...ride, id: 2}, {...ride, id: 3}, {...ride, id: 4}, {...ride, id: 5}, {...ride, id: 6}]

export default class caronaboardnative extends Component {
  constructor () {
    super()
    Kitten.setup()
    this.state = { rides: undefined }
    getAllRides().then((data) => this.setState({rides: data}))
  }

  render () {
    const { rides } = this.state
    console.log('State rides: ', rides || mockedRides)

    return (
      <View style={styles.container}>
        <RideList key={rides} rides={rides || mockedRides} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

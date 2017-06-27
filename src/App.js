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
import firebase from 'firebase'

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

var rides = [{...ride, id: 1}, {...ride, id: 2}, {...ride, id: 3}, {...ride, id: 4}, {...ride, id: 5}, {...ride, id: 6}]

const firebaseConfig = {
  apiKey: 'AIzaSyDfwHLwWKTqduazsf4kjbstJEA2E1sCeoI',
  authDomain: 'caronaboard-61f75.firebaseapp.com',
  databaseURL: 'https://caronaboard-61f75.firebaseio.com',
  projectId: 'caronaboard-61f75',
  storageBucket: 'caronaboard-61f75.appspot.com',
  messagingSenderId: '617045704123'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default class caronaboardnative extends Component {
  constructor () {
    super()
    this.itemsRef = this.getRef().child('rides')
  }

  getRef () {
    return firebaseApp.database().ref()
  }

  componentWillMount () {
    Kitten.setup()
  }

  componentDidMount () {
    console.log('getting rides')
    this.itemsRef.on('value', (snap) => {
      console.log('rides')
      console.log(snap)
      console.log(snap)
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <RideList rides={rides} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

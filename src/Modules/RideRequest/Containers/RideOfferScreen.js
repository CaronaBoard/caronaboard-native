import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { RkText } from 'react-native-ui-kitten'
import PropTypes from 'prop-types'

import { Button, TextInput } from '../../Shared/Components'
import styles from './Styles/RideOfferScreenStyles'

export class RideOfferScreen extends Component {
  render () {
    return (
      <View style={styles.flexible}>
        <View style={styles.container}>
          <RkText style={styles.title}>
            Ride Offer
          </RkText>
          <View style={styles.inputTextsContainer}>
            <TextInput label='ORIGIN' />
            <TextInput label='DESTINATION' />
            <TextInput label='DAYS' />
            <TextInput label='HOUR' />
          </View>
          <Button text='Offer Ride' onPress={() => console.log('Apertou Oferecer Ride')} />
        </View>
      </View>
    )
  }
}

RideOfferScreen.propTypes = {
  foo: PropTypes.any
}

RideOfferScreen.defaultProps = {
  foo: ''
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RideOfferScreen)

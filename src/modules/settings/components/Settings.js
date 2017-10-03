import React from 'react'
import { RkText } from 'react-native-ui-kitten'
import {
  ScrollView,
  View,
  TouchableOpacity
} from 'react-native'
import PropTypes from 'prop-types'

import { styles } from './styles/Settings.style'

export class Settings extends React.Component {
  static propTypes = {
    openProfile: PropTypes.func.isRequired,
    resetPassword: PropTypes.func.isRequired,
    logOut: PropTypes.func.isRequired,
    eraseUserData: PropTypes.func.isRequired,
    openFeedback: PropTypes.func.isRequired
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <View style={[styles.row, styles.heading]}>
            <RkText rkType='primary header6'>PROFILE SETTINGS</RkText>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.rowButton}
              onPress={() => this.props.openProfile()}
            >
              <RkText rkType='header6'>Edit Profile</RkText>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.rowButton}
              onPress={() => this.props.resetPassword()}
            >
              <RkText rkType='header6'>Reset Password</RkText>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.section}>
          <View style={[styles.row, styles.heading]}>
            <RkText rkType='primary header6'>USER SETTINGS</RkText>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.rowButton}
              onPress={() => this.props.eraseUserData()}
            >
              <RkText rkType='header6'>Erase User Data</RkText>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.rowButton}
              onPress={() => this.props.logOut()}
            >
              <RkText rkType='header6'>Logout</RkText>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.section}>
          <View style={[styles.row, styles.heading]}>
            <RkText rkType='primary header6'>Feedback</RkText>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.rowButton}
              onPress={() => this.props.openFeedback()}
            >
              <RkText rkType='header6'>Send us a feedback</RkText>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    )
  }
}

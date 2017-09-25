import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { RkButton, RkText } from 'react-native-ui-kitten'
import Styles from './styles/SignInFooterStyles'
import { screens } from '../../../configuration/navigation/Screens'

export class SignInFooter extends Component {
  static propTypes = {
    email: PropTypes.string,
    navigator: PropTypes.object.isRequired
  }

  navigateTo = screen => () => this.props.navigator.push({screen})

  render () {
    return (
      <View>
        <View style={Styles.textRow}>
          <RkButton
            key='forgot-password-button'
            rkType='clear'
            onPress={this.navigateTo(screens.forgotPassword.id)}
          >
            <RkText rkType='header6'>Forgot your password?</RkText>
          </RkButton>
        </View>
        <View style={Styles.textRow}>
          <RkText rkType='primary3'>Don’t have an account?</RkText>
          <RkButton
            key='signup-button'
            rkType='clear'
            onPress={this.navigateTo(screens.signUp.id)}
          >
            <RkText rkType='header6'> Sign up now</RkText>
          </RkButton>
        </View>
      </View>
    )
  }
}

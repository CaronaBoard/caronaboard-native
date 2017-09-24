import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { RkButton, RkText } from 'react-native-ui-kitten'
import Styles from './styles/SignInFooterStyles'

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
          <RkButton rkType='clear' onPress={this.navigateTo('carona.forgotPassword')}>
            <RkText rkType='header6'>Forgot your password?</RkText>
          </RkButton>
        </View>
        <View style={Styles.textRow}>
          <RkText rkType='primary3'>Don’t have an account?</RkText>
          <RkButton rkType='clear' onPress={this.navigateTo('carona.signUp')}>
            <RkText rkType='header6'> Sign up now</RkText>
          </RkButton>
        </View>
      </View>
    )
  }
}

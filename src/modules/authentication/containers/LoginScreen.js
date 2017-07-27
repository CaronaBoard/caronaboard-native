import React from 'react'
import {
  View,
  Image,
  Keyboard
} from 'react-native'
import {
  RkButton,
  RkText,
  RkTextInput,
  RkAvoidKeyboard,
  RkTheme
} from 'react-native-ui-kitten'
import { GradientButton } from '../../shared/components'
import { styles } from './styles/LoginScreenStyles'

export default class LoginV2 extends React.Component {
  onLoginButtonPress = () => {
  }

  navigateToSignUpScreen = () => {
  }

  renderIcon = () => {
    let source
    if (RkTheme.current.name === 'light') {
      source = require('../../../assets/images/logo.png')
    } else {
      source = require('../../../assets/images/logoDark.png')
    }

    return <Image style={styles.image} source={source} />
  }

  render () {
    return (
      <RkAvoidKeyboard
        style={styles.screen}
        onStartShouldSetResponder={e => true}
        onResponderRelease={e => Keyboard.dismiss()}>

        <View style={styles.header}>
          {this.renderIcon()}
          <RkText rkType='logo h0'>Caronaboard</RkText>
          <RkText rkType='light h1'>Awesome Slogan</RkText>
        </View>

        <RkTextInput rkType='rounded' placeholder='Username' />
        <RkTextInput rkType='rounded' placeholder='Password' secureTextEntry />

        <View style={styles.centralized}>
          <GradientButton style={styles.loginButton} rkType='large' text='LOGIN' onPress={this.onLoginButtonPress} />
        </View>

        <View style={styles.textRow}>
          <RkText rkType='primary3'>Don’t have an account?</RkText>
          <RkButton rkType='clear' onPress={this.navigateToSignUpScreen}>
            <RkText rkType='header6'> Sign up now </RkText>
          </RkButton>
        </View>

      </RkAvoidKeyboard>
    )
  }
}

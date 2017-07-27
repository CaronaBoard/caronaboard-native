import React from 'react'
import { View, Image, Keyboard } from 'react-native'
import Toast, { DURATION } from 'react-native-easy-toast'
import { RkText, RkTextInput, RkAvoidKeyboard } from 'react-native-ui-kitten'
import { GradientButton } from '../../shared/components/index'
import { styles } from '../containers/styles/LoginScreenStyles'

export const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false
}

export default class LoginV2 extends React.Component {
  constructor (props) {
    super(props)
    this.state = INITIAL_STATE
  }

  onButtonPress = () => {
    const { email, password } = this.state
    const { onButtonPress } = this.props
    try {
      onButtonPress(email, password)
    } catch (error) {
      console.log(error)
    }
  }

  componentWillReceiveProps (nextProps) {
    const { showAlert, message } = nextProps.alert

    if (showAlert) {
      this.refs.toast.show(message, DURATION.LENGTH_LONG)
    }
  }

  render () {
    return (
      <RkAvoidKeyboard
        style={styles.screen}
        onStartShouldSetResponder={e => true}
        onResponderRelease={e => Keyboard.dismiss()}>

        <View style={styles.header}>
          <Image style={styles.image} source={require('../../../assets/images/logo.png')} />
          <RkText rkType='logo h0'>Caronaboard</RkText>
          <RkText rkType='light h1'>Awesome Slogan</RkText>
        </View>

        <RkTextInput onChangeText={(email) => { this.setState({email}) }} rkType='rounded' placeholder='Username' autoCapitalize='none' />
        <RkTextInput onChangeText={(password) => { this.setState({password}) }} rkType='rounded' placeholder='Password' secureTextEntry />

        <View style={styles.centralized}>
          <GradientButton
            style={styles.loginButton}
            rkType='large'
            text='LOGIN'
            onPress={this.onButtonPress}
          />
        </View>

        {this.props.footer()}
        <Toast position='top' ref='toast' />
      </RkAvoidKeyboard>
    )
  }
}

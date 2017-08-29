import React from 'react'
import { View, Image, Keyboard } from 'react-native'
import Toast, { DURATION } from 'react-native-easy-toast'
import { RkText, RkAvoidKeyboard } from 'react-native-ui-kitten'
import { GradientButton, TextInput } from '../../shared/components'
import { styles } from '../containers/styles/LoginScreenStyles'

export class LoginForm extends React.Component {
  static defaultProps = {
    footer: () => {},
    toast: {
      showAlert: false,
      message: ''
    }
  }

  state = {
    email: '',
    password: '',
    loading: false
  }

  onButtonPress = () => {
    const { email, password } = this.state
    this.props.onButtonPress(email, password)
  }

  componentWillReceiveProps (nextProps) {
    const { showAlert, message } = nextProps.toast

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
          <Image style={styles.image} source={require('../../../assets/images/caronaboard-logo-azul.png')} />
          <RkText rkType='logo h0'>Caronaboard</RkText>
          <RkText rkType='light h1'>Awesome Slogan</RkText>
        </View>

        <TextInput
          onChangeText={(email) => { this.setState({email}) }}
          key='email-input'
          rkType='rounded'
          placeholder='Username'
          autoCapitalize='none'
        />
        <TextInput
          onChangeText={(password) => { this.setState({password}) }}
          key='password-input'
          rkType='rounded'
          placeholder='Password'
          secureTextEntry
        />

        <View style={styles.centralized}>
          <GradientButton
            rkType='large'
            style={styles.loginButton}
            text={this.props.buttonText}
            onPress={this.onButtonPress}
          />
        </View>

        {this.props.footer(this.state.email)}
        <Toast position='top' ref='toast' />
      </RkAvoidKeyboard>
    )
  }
}

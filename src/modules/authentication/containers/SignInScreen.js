import Styles from './styles/SignInScreenStyles'
import React, { Component } from 'react'
import { View } from 'react-native'
import { RkText } from 'react-native-ui-kitten'
import { Button, TextInput } from '../../shared/components'
import { signInFirebase } from '../../../redux/actions'
import { connect } from 'react-redux'

export const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false
}

export class SignInScreen extends Component {
  constructor (props) {
    super(props)
    this.state = INITIAL_STATE
  }

  onPressSignInButton = async () => {
    this.setState({loading: true})
    try {
      this.props.signIn(this.state.email, this.state.password)
    } catch (error) {
      this.setState({loading: false})
      console.error(error)
    }
  }

  navigateToSignUpScreen = () => {
    this.props.navigator.push({screen: 'carona.signUp'})
  }

  onLoginSuccess = (userData) => {
    this.setState({loading: false})
    // TODO: navigate to ridelist?
  }

  render () {
    if (this.props.userData !== {}) {
      // TODO: User already logged in
    }

    return (
      <View style={Styles.flexible}>
        <View style={Styles.container}>
          <RkText style={Styles.title}>
            SIGN IN
          </RkText>
          <View style={Styles.credentialsContainer}>
            <TextInput
              onChangeText={(email) => { this.setState({email}) }}
              label='EMAIL ADDRESS'
              key='email-input' />
            <TextInput
              onChangeText={(password) => { this.setState({password}) }}
              label='PASSWORD'
              key='password-input' />
          </View>
          <Button
            text='SIGN IN'
            onPress={this.onPressSignInButton}
            key='signin-button' />
          <Button
            text='SIGN UP'
            onPress={this.navigateToSignUpScreen}
            key='signup-button' />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.auth.userData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (email, password) => dispatch(signInFirebase(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen)

import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { RkText } from 'react-native-ui-kitten'
import Toast, { DURATION } from 'react-native-easy-toast'
import { Button, TextInput } from '../../shared/components'
import { signUpFirebase } from '../../../redux/actions'
import Styles from './styles/SignUpScreenStyles'

export const INITIAL_STATE = {
  email: '',
  password: ''
}

export class SignUpScreen extends Component {
  constructor (props) {
    super(props)
    this.state = INITIAL_STATE
  }

  onButtonSubmit = () => {
    this.props.signUp(this.state.email, this.state.password)
  }

  componentWillReceiveProps (nextProps) {
    const { showAlert, message } = nextProps.alert

    if (showAlert) {
      this.refs.toast.show(message, DURATION.LENGTH_LONG)
    }
  }

  render () {
    return (
      <View style={Styles.flexible}>
        <View style={Styles.container}>
          <RkText style={Styles.title}>
            REGISTER NEW ACCOUNT
          </RkText>
          <View style={Styles.credentialsContainer}>
            <TextInput
              onChangeText={(email) => { this.setState({email}) }}
              key='email-input'
              label='EMAIL ADDRESS' />
            <TextInput
              onChangeText={(password) => { this.setState({password}) }}
              key='password-input'
              label='PASSWORD' />
          </View>
          <Button text='SIGN UP' onPress={this.onButtonSubmit} />
        </View>
        <Toast position='top' ref='toast' />
      </View>
    )
  }
}

SignUpScreen.propTypes = {
  alert: PropTypes.PropTypes.shape({
    showAlert: PropTypes.bool.isRequired,
    message: PropTypes.string
  }).isRequired
}

const mapStateToProps = (state) => {
  return {
    alert: state.auth.alert
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (email, password) => dispatch(signUpFirebase(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen)

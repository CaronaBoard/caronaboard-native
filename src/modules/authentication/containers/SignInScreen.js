import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { RkButton, RkText } from 'react-native-ui-kitten'
import Styles from './styles/SignInScreenStyles'
import { signInFirebase } from '../../../redux/actions'
import { LoginForm } from '../components/LoginForm'

export class SignInScreen extends Component {
  static propTypes = {
    signIn: PropTypes.func.isRequired,
    alert: PropTypes.shape({
      showAlert: PropTypes.bool.isRequired,
      message: PropTypes.string
    }).isRequired
  }

  renderFooter = () => {
    return (
      <View style={Styles.textRow}>
        <RkText rkType='primary3'>Don’t have an account?</RkText>
        <RkButton rkType='clear' onPress={() => this.props.navigator.push({screen: 'carona.signUp'})}>
          <RkText rkType='header6'> Sign up now </RkText>
        </RkButton>
      </View>
    )
  }

  render () {
    return (
      <LoginForm
        buttonText='SIGN IN'
        onButtonPress={this.props.signIn}
        toast={this.props.alert}
        footer={this.renderFooter()}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    alert: state.auth.alert
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (email, password) => dispatch(signInFirebase(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen)

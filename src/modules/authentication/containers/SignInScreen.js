import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { signInFirebase } from '../../../redux/actions'
import { LoginForm } from '../components/LoginForm'
import { SignInFooter } from '../components/SignInFooter'
import { AlertPropType } from '../types'
import Navigation from '../../../configuration/Navigation'

export class SignInScreen extends Component {
  static propTypes = {
    signIn: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    alert: AlertPropType
  }

  renderFooter = () => {
    return <SignInFooter navigator={this.props.navigator} />
  }

  componentWillUpdate (nextProps) {
    if (nextProps.user.uid !== '') {
      Navigation.userLoggedIn()
    }
  }

  render () {
    return (
      <LoginForm
        buttonText='SIGN IN'
        onButtonPress={this.props.signIn}
        toast={this.props.alert}
        footer={this.renderFooter}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    alert: state.auth.alert,
    user: state.auth.userData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (email, password) => dispatch(signInFirebase(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen)

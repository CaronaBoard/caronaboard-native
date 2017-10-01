import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { AlertPropType } from '../types'
import { LoginForm } from '../components/LoginForm'
import { signInFirebase } from '../../../redux/actions'
import { SignInFooter } from '../components/SignInFooter'
import { signIn } from '../../../services/firebase/Authentication'
import { alertAction } from '../../../redux/actions/sync/AuthActions'

export class SignInScreen extends Component {
  static propTypes = {
    userSignedIn: PropTypes.func.isRequired,
    onError: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    alert: AlertPropType
  }

  onPress = async (email, password) => {
    try {
      const user = await signIn(email, password)
      this.props.userSignedIn(user)
    } catch (error) {
      this.props.onError(error)
    }
  }

  renderFooter = () => {
    return <SignInFooter navigator={this.props.navigator} />
  }

  render () {
    return (
      <LoginForm
        buttonText='SIGN IN'
        onButtonPress={this.onPress}
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
    userSignedIn: user => dispatch(signInFirebase(user)),
    onError: error => dispatch(alertAction(error))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen)

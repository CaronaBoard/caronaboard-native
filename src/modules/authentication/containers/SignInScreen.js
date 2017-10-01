import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { signIn as signInUserNameAndPassword } from '../../../services/firebase/Authentication'
import { signInFirebase } from '../../../redux/actions'
import { LoginForm } from '../components/LoginForm'
import { SignInFooter } from '../components/SignInFooter'
import { AlertPropType } from '../types'
import Navigation from '../../../configuration/Navigation'
import { alertAction } from '../../../redux/actions/sync/AuthActions'

export class SignInScreen extends Component {
  static propTypes = {
    signIn: PropTypes.func.isRequired,
    onError: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    alert: AlertPropType
  }

  onPress = async (email, password) => {
    try {
      const user = await signInUserNameAndPassword(email, password)
      console.log(user, 'is ===> user')
      this.props.signIn(user)
    } catch (error) {
      this.props.onError(error)
    }
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
    signIn: user => dispatch(signInFirebase(user)),
    onError: error => dispatch(alertAction(error))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen)

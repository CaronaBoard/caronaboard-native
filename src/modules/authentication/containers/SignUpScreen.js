import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { signUpFirebase } from '../../../redux/actions'
import { LoginForm } from '../components/LoginForm'
import { AlertPropType } from '../types'

export class SignUpScreen extends Component {
  static propTypes = {
    signUp: PropTypes.func.isRequired,
    alert: AlertPropType
  }

  render () {
    return (
      <LoginForm
        onButtonPress={this.props.signUp}
        toast={this.props.alert}
        buttonText='SIGN UP'
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
    signUp: (email, password) => dispatch(signUpFirebase(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen)

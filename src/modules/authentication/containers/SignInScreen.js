import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { RkButton, RkText } from 'react-native-ui-kitten'
import Styles from './styles/SignInScreenStyles'
import { signInFirebase } from '../../../redux/actions'
import LoginScreen from '../components/LoginScreen'

export class SignInScreen extends Component {
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
      <LoginScreen
        onButtonPress={this.props.signIn}
        footer={this.renderFooter}
      />
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

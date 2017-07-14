import Styles from './Styles/SignInScreenStyles'
import React, { Component } from 'react'
import { View } from 'react-native'
import { RkText } from 'react-native-ui-kitten'
import { Button, TextInput } from '../../Shared/Components'
import { signInFirebase } from '../../../Redux/Actions'
import { connect } from 'react-redux'

export class SignInScreen extends Component {
  constructor (props) {
    super()
    this.state = {
      email: '',
      password: '',
      loading: false
    }
  }

  onButtonSubmit = () => {
    this.props.signIn(this.state.email, this.state.password).then(this.onLoginSuccess)
  }

  onLoginSuccess = (userData) => {
    // TODO navigate to ridelist?
  }

  render () {
    return (
      <View style={Styles.flexible}>
        <View style={Styles.container}>
          <RkText style={Styles.title}>
            SIGN IN
          </RkText>
          <View style={Styles.credentialsContainer}>
            <TextInput label='EMAIL ADDRESS' onChangeText={(email) => { this.setState({email}) }} />
            <TextInput label='PASSWORD' onChangeText={(password) => { this.setState({password}) }} />
          </View>
          <Button text='SIGN IN' onPress={this.onButtonSubmit} />
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
    signIn: (e, p) => dispatch(signInFirebase(e, p))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen)

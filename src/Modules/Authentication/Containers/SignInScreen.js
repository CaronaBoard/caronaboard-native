import React, { Component } from 'react'
import { View } from 'react-native'
import { RkText } from 'react-native-ui-kitten'
import { Button, TextInput } from '../../Shared/Components'
import { signIn } from '../../../Services/Firebase'
import Styles from './Styles/SignInScreenStyles'

export default class SignInScreen extends Component {
  constructor (props) {
    super()
    this.state = {
      email: '',
      password: '',
      loading: false
    }
  }

  onButtonSubmit = () => {
    console.log(`email: ${this.state.email} \npassword: ${this.state.password}`)
    signIn(this.state.email, this.state.password).then(this.onLoginSuccess)
  }

  onLoginSuccess = (userData) => {
    console.log('Login successful')
    console.log(`user uid: ${userData.uid} \nemail: ${userData.email}`)
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
          <Button text='SIGN IN' onPress={() => console.log('Apertou Fazer Signin')} />
        </View>
      </View>
    )
  }
}

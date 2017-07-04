import React, { Component } from 'react'
import { View } from 'react-native'
import { RkText } from 'react-native-ui-kitten'

import { Button, TextInput } from '../../Shared/Components'
import Styles from './Styles/SignInScreenStyles'

export default class SignInScreen extends Component {
  render () {
    return (
      <View style={Styles.flexible}>
        <View style={Styles.container}>
          <RkText style={Styles.title}>
            SIGN IN
          </RkText>
          <View style={Styles.credentialsContainer}>
            <TextInput label='EMAIL ADDRESS' onChangeText={(text) => console.log(text)} />
            <TextInput label='PASSWORD' onChangeText={(text) => console.log(text)} />
          </View>
          <Button text='SIGN IN' onPress={() => console.log('Apertou Fazer Signin')} />
        </View>
      </View>
    )
  }
}

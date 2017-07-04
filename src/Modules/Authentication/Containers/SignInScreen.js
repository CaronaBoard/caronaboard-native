import React, { Component } from 'react'
import { View } from 'react-native'
import { RkTextInput, RkText } from 'react-native-ui-kitten'

import { Button } from '../../Shared/Components'
import Styles from './Styles/SignInScreenStyles'

export default class SignInScreen extends Component {
  render () {
    return (
      <View style={Styles.flexible}>
        <View style={Styles.container}>
          <View>
            <RkText style={Styles.title}>
              SIGN IN
            </RkText>
          </View>
          <View style={Styles.credentialsContainer}>
            <RkTextInput
              rkType='underline topLabel'
              label='EMAIL ADDRESS'
              labelStyle={Styles.inputLabel}
              containerStyle={Styles.inputContainer}
              style={Styles.input} />
            <RkTextInput
              rkType='underline topLabel'
              label='PASSWORD'
              labelStyle={Styles.inputLabel}
              containerStyle={Styles.inputContainer}
              style={Styles.input}
              secureTextEntry />
          </View>
          <Button text='SIGN IN' onPress={() => console.log('Apertou Fazer Signin')} />
        </View>
      </View>
    )
  }
}

import React, { Component } from 'react'
import { View } from 'react-native'

import { RkButton, RkTextInput, RkText } from 'react-native-ui-kitten'
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
          <View>
            <RkButton innerStyle={[Styles.buttonFontSize]}
              rkType='circle outline medium'
              onPress={() => console.log('Apertou Fazer Signin')}>
              SIGN IN
            </RkButton>
          </View>
        </View>
      </View>
    )
  }
}

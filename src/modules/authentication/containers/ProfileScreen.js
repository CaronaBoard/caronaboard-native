import Styles from './styles/ProfileScreenStyles'
import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { RkText, RkChoice, RkChoiceGroup } from 'react-native-ui-kitten'
import { Button, TextInput } from '../../shared/components'

export default class ProfileScreen extends Component {
  render () {
    return (
      <View style={Styles.flexible}>
        <View style={Styles.container}>
          <RkText style={Styles.title}>
            PROFILE
          </RkText>
          <View style={Styles.inputTextsContainer}>
            <TextInput label='Your name' onChangeText={() => {}} />
          </View>
          <RkChoiceGroup radio rkType='clear' onChange={() => {}}>
            <TouchableOpacity choiceTrigger>
              <View style={Styles.contactOption}>
                <RkChoice rkType='radio' />
                <RkText>Telegram</RkText>
              </View>
            </TouchableOpacity>
            <TouchableOpacity choiceTrigger>
              <View style={Styles.contactOption}>
                <RkChoice rkType='radio' />
                <RkText>WhatsApp</RkText>
              </View>
            </TouchableOpacity>
          </RkChoiceGroup>
          <View style={Styles.inputTextsContainer}>
            <TextInput label='Number' onChangeText={() => {}} />
          </View>
          <Button text='SAVE' onPress={() => {}} />
        </View>
      </View>
    )
  }
}

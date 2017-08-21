import Styles from './styles/ProfileScreenStyles'
import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { RkText, RkChoice, RkChoiceGroup } from 'react-native-ui-kitten'
import { TextInput, GradientButton } from '../../shared/components'
import { saveProfileFirebase } from '../../../redux/actions'
import { connect } from 'react-redux'

export const CONTACT_OPTIONS = ['Whatsapp', 'Telegram']

export class ProfileScreen extends Component {
  onContactOptionSelected = (contactKind) => {
    this.setState({contactKind})
  }

  onButtonSubmit = async () => {
    this.setState({loading: true})
    let profile = {
      name: this.state.name,
      contact: {
        kind: this.state.contactKind,
        value: this.state.number
      }
    }
    try {
      this.props.saveProfile(profile)
    } catch (error) {
      this.setState({loading: false})
      console.error(error)
    }
  }

  render () {
    let renderOption = (option, i) => (
      <View key={i}>
        <TouchableOpacity choiceTrigger>
          <View style={Styles.contactOption}>
            <RkChoice rkType='radio' />
            <RkText>{option}</RkText>
          </View>
        </TouchableOpacity>
      </View>
    )

    return (
      <View style={Styles.flexible}>
        <View style={Styles.container}>
          <RkText style={Styles.title}>
            PROFILE
          </RkText>
          <View style={Styles.inputTextsContainer}>
            <TextInput
              placeholder='Your name'
              onChangeText={(name) => { this.setState({name}) }} />
          </View>
          <RkChoiceGroup
            radio
            rkType='clear'
            onChange={(index) => this.onContactOptionSelected(CONTACT_OPTIONS[index])}>
            {CONTACT_OPTIONS.map(renderOption)}
          </RkChoiceGroup>
          <View style={Styles.inputTextsContainer}>
            <TextInput
              placeholder='Number'
              onChangeText={(number) => { this.setState({number}) }} />
          </View>
        </View>
        <View style={Styles.centralized}>
          <GradientButton
            rkType='large'
            text={'SAVE'}
            onPress={this.onButtonSubmit}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.auth.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveProfile: (profile) => dispatch(saveProfileFirebase(profile))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)

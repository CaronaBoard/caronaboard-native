import Styles from './styles/ProfileScreenStyles'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, TouchableOpacity } from 'react-native'
import { RkText, RkChoice, RkChoiceGroup } from 'react-native-ui-kitten'
import type { ProfileType } from '../../../services/firebase/types'
import { ProfilePropType } from '../../authentication/types/index'

import { TextInput, GradientButton } from '../../shared/components/index'
import { saveProfileFirebase } from '../../../redux/actions/index'
import { LoadingSpinnerView } from '../../shared/components/LoadingSpinnerView'

export const CONTACT_OPTIONS = ['Whatsapp', 'Telegram']
export const INITIAL_STATE: ProfileType = {
  profile: {
    name: '',
    uid: '',
    contact: {
      kind: '',
      value: ''
    }
  },
  loading: false
}

export class ProfileScreen extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    userId: PropTypes.string.isRequired,
    profile: ProfilePropType
  }

  state = INITIAL_STATE

  onContactOptionSelected = kind => {
    const { profile } = this.state
    let { contact } = profile
    contact.kind = kind
    this.setState({profile: {...profile, contact}})
  }

  onButtonSubmit = async () => {
    this.setState({loading: true})

    try {
      await this.props.saveProfile(this.state.profile)
      alert('Perfil Atualizado com sucesso!')
    } catch (error) {
      console.error(error)
    }

    this.setState({loading: false})
  }

  renderOption = (option, i) => (
    <View key={i}>
      <TouchableOpacity choiceTrigger>
        <View style={Styles.contactOption}>
          <RkChoice rkType='radio' />
          <RkText>{option}</RkText>
        </View>
      </TouchableOpacity>
    </View>
  )

  componentDidMount () {
    const { profile } = this.props
    this.setState({profile, loading: false})
  }

  render () {
    const { profile } = this.state
    const { contact, name } = profile

    return (
      <LoadingSpinnerView isLoading={this.state.loading} style={Styles.flexible}>
        <View style={Styles.flexible}>
          <View style={Styles.container}>
            <RkText style={Styles.title}>
              PROFILE
            </RkText>
            <View style={Styles.inputTextsContainer}>
              <TextInput
                placeholder='Seu nome'
                value={name}
                onChangeText={name => { this.setState({profile: {...profile, name}}) }}
              />
            </View>
            <RkChoiceGroup
              radio
              rkType='clear'
              onChange={index => this.onContactOptionSelected(CONTACT_OPTIONS[index])}>
              {CONTACT_OPTIONS.map(this.renderOption)}
            </RkChoiceGroup>
            <View style={Styles.inputTextsContainer}>
              <TextInput
                placeholder='Número'
                value={contact.value}
                onChangeText={value => { this.setState({profile: {...profile, contact: {...contact, value}}}) }}
              />
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
      </LoadingSpinnerView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.auth.profile, // TODO: do we have profile saved into state?
    userId: state.auth.userData.uid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveProfile: (profile, userId) => dispatch(saveProfileFirebase(profile, userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)

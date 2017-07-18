import React from 'react'
import PropTypes from 'prop-types'

import { RkTextInput } from 'react-native-ui-kitten'
import Styles from './styles/TextInputStyles'

export const TextInput = (props) => {
  return (
    <RkTextInput
      rkType='underline topLabel'
      labelStyle={Styles.inputLabel}
      containerStyle={Styles.inputContainer}
      style={Styles.input}
      label={props.label}
      onChangeText={props.onChangeText}
    />
  )
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired
}

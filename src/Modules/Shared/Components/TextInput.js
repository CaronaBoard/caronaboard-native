import React from 'react'
import PropTypes from 'prop-types'

import { RkTextInput } from 'react-native-ui-kitten'
import Styles from './Styles/TextInputStyles'

export const TextInput = (props) => {
  return (
    <RkTextInput
      rkType='underline topLabel'
      label={props.label}
      labelStyle={Styles.inputLabel}
      containerStyle={Styles.inputContainer}
      style={Styles.input} />
  )
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired
}

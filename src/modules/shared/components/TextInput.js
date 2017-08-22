import React from 'react'
import PropTypes from 'prop-types'

import { RkTextInput } from 'react-native-ui-kitten'

export const TextInput = (props) => {
  return (
    <RkTextInput
      rkType='rounded'
      autoCapitalize='none'
      {...props} />
  )
}

TextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired
}

TextInput.defaultProps = {
  rkType: 'rounded',
  autoCapitalize: 'none'
}

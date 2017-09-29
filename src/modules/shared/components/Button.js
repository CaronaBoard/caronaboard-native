import React from 'react'
import PropTypes from 'prop-types'

import { RkButton } from 'react-native-ui-kitten'
import Styles from './styles/Button.style'

export const Button = (props) => {
  return (
    <RkButton innerStyle={[Styles.buttonFontSize]}
      rkType='circle outline medium'
      onPress={props.onPress}>
      { props.text }
    </RkButton>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
}

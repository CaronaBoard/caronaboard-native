import { StyleSheet } from 'react-native'
import { RkConfig } from 'react-native-ui-kitten'

import { Metrics, Fonts } from '../../Themes'

export default StyleSheet.create({
  inputLabel: {
    paddingBottom: Metrics.doubleBaseMargin
  },
  inputContainer: {
    borderBottomColor: RkConfig.colors.darkGray
  },
  input: {
    fontSize: Fonts.size.h5,
    color: RkConfig.colors.primary
  }
})

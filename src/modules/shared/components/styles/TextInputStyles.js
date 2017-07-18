import { StyleSheet } from 'react-native'
import { Metrics, Fonts, Colors } from '../../themes'

export default StyleSheet.create({
  inputLabel: {
    paddingBottom: Metrics.doubleBaseMargin
  },
  inputContainer: {
    borderBottomColor: Colors.darkGray
  },
  input: {
    fontSize: Fonts.size.h5,
    color: Colors.primary
  }
})

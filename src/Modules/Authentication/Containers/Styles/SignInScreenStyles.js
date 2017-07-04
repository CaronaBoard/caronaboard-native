import { StyleSheet } from 'react-native'
import { Fonts, Metrics } from '../../../Shared/Themes/index'
import { RkConfig } from 'react-native-ui-kitten'

export default StyleSheet.create({
  container: {
    paddingHorizontal: Metrics.doubleSection,
    justifyContent: 'space-around',
    flex: 1
  },
  title: {
    fontSize: Fonts.size.h1,
    textAlign: 'center'
  },
  inputLabel: {
    paddingBottom: Metrics.doubleBaseMargin
  },
  inputContainer: {
    borderBottomColor: RkConfig.colors.darkGray,
    marginTop: Metrics.doubleSection
  },
  input: {
    fontSize: Fonts.size.h5,
    color: RkConfig.colors.primary
  },
  flexible: {
    flex: 1
  },
  credentialsContainer: {
    minHeight: 185
  }
})

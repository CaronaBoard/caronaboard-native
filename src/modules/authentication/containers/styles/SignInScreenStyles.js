import { StyleSheet } from 'react-native'
import { Fonts, Metrics } from '../../../shared/themes/index'

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
  flexible: {
    flex: 1
  },
  credentialsContainer: {
    minHeight: 185
  }
})

import { StyleSheet } from 'react-native'
import { Fonts, Metrics } from '../../../shared/themes'

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
  inputTextsContainer: {
    minHeight: 50
  },
  contactOption: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  centralized: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

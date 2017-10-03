import { StyleSheet } from 'react-native'
import { Metrics } from '../../../shared/themes/index'

export default StyleSheet.create({
  container: {
    paddingHorizontal: Metrics.doubleSection,
    justifyContent: 'space-around',
    flex: 1
  },
  flexible: {
    flex: 1
  },
  inputTextsContainer: {
  },
  centralized: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

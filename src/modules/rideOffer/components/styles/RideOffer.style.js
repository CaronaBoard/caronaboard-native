import { StyleSheet } from 'react-native'
import { Fonts, Metrics } from '../../../shared/themes'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    margin: Metrics.baseMargin
  },
  deleteIcon: {
    alignSelf: 'flex-end',
    margin: Metrics.baseMargin
  },
  title: {
    ...Fonts.style.h4
  },
  subTitle: {
    ...Fonts.style.h6
  },
  text: {
    ...Fonts.style.input
  },
  line: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    fontSize: Metrics.icons.tiny,
    marginRight: Metrics.smallMargin
  }
})

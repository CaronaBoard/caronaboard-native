// @flow
import I18n from 'react-native-i18n'

export const setupInternalization = () => {
  I18n.translations = {
    en: require('./languages/english.json'),
    pt: require('./languages/pt.json')
  }

  I18n.defaultLocale = 'pt'
}

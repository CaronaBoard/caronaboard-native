import I18n from 'react-native-i18n'

export const setupInternalization = () => {
  I18n.locale = 'pt'
  I18n.fallbacks = true
  I18n.defaultLocale = 'pt'

  I18n.translations = {
    en: require('./translations/en.json'),
    pt: require('./translations/pt.json')
  }
}

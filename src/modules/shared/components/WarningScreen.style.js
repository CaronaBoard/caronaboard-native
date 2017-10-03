import React from 'react'
import PropTypes from 'prop-types'
import { RkText } from 'react-native-ui-kitten'
import { View, Image, Keyboard } from 'react-native'
import { styles } from './styles/WarningScreen.style'

export const WarningScreen = props => {
  const { uid, activeGroups } = props
  return (
    <View
      style={styles.screen}
      onStartShouldSetResponder={e => true}
      onResponderRelease={e => Keyboard.dismiss()}>
      <View style={styles.header}>
        <Image style={styles.image} source={require('../../../assets/images/caronaboard-logo-azul.png')} />
        <RkText rkType='logo h0'>Caronaboard</RkText>
        <RkText rkType='light h1'>{uid && 'Favor preencher o perfil'}</RkText>
        <RkText rkType='light h1'>{activeGroups && 'Favor Selecionar um grupo'}</RkText>
      </View>
    </View>
  )
}

WarningScreen.propTypes = {
  uid: PropTypes.string,
  activeGroups: PropTypes.string
}

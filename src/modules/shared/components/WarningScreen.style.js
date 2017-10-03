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
        {!uid ? <RkText rkType='light h1'>Favor preencher o perfil</RkText> : null}
        {!activeGroups ? <RkText rkType='light h1'>Favor Selecionar um grupo</RkText> : null}
      </View>
    </View>
  )
}

WarningScreen.propTypes = {
  uid: PropTypes.string,
  activeGroups: PropTypes.string
}

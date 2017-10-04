import React from 'react'
import PropTypes from 'prop-types'
import { RkText } from 'react-native-ui-kitten'
import { View, Image } from 'react-native'
import { styles } from './styles/WarningScreen.style'

const renderValidations = (uid, activeGroup, emailVerified) => {
  if (!emailVerified) {
    return (
      <View>
        <RkText rkType='light h1'>Verifique sua caixa de email</RkText>
        <RkText rkType='light h1'>Valide seu cadastro</RkText>
      </View>
    )
  }
  return (
    <View>
      {!uid ? <RkText rkType='light h1'>Favor preencher o perfil</RkText> : null}
      {!activeGroup ? <RkText rkType='light h1'>Favor Selecionar um grupo</RkText> : null}
    </View>
  )
}

export const WarningScreen = props => {
  const { uid, activeGroup, emailVerified } = props
  return (
    <View style={styles.screen} >
      <View style={styles.header}>
        <RkText rkType='logo h0'>Caronaboard</RkText>
        <Image style={styles.image} source={require('../../../assets/images/caronaboard-logo-azul.png')} />
        {renderValidations(uid, activeGroup, emailVerified)}
      </View>
    </View>
  )
}

WarningScreen.propTypes = {
  uid: PropTypes.string,
  activeGroup: PropTypes.string,
  emailVerified: PropTypes.bool
}

WarningScreen.defaultProps = {
  emailVerified: true
}

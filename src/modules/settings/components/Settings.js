import React from 'react'
import { RkText } from 'react-native-ui-kitten'
import {
  ScrollView,
  View,
  TouchableOpacity
} from 'react-native'
import PropTypes from 'prop-types'

import { styles } from './styles/Settings.style'

export class Settings extends React.Component {
  static propTypes = {
    openProfile: PropTypes.func.isRequired,
    resetPassword: PropTypes.func.isRequired,
    logOut: PropTypes.func.isRequired,
    eraseUserData: PropTypes.func.isRequired
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <View style={[styles.row, styles.heading]}>
            <RkText rkType='primary header6'>CONFIGURAÇŌES DE PERFIL</RkText>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.rowButton}
              onPress={() => this.props.openProfile()}
            >
              <RkText rkType='header6'>Editar perfil</RkText>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.rowButton}
              onPress={() => this.props.resetPassword()}
            >
              <RkText rkType='header6'>Trocar senha</RkText>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.section}>
          <View style={[styles.row, styles.heading]}>
            <RkText rkType='primary header6'>CONFIGURAÇŌES DE USUÁRIO</RkText>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.rowButton}
              onPress={() => this.props.eraseUserData()}
            >
              <RkText rkType='header6'>Apagar dados de usuário</RkText>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.rowButton}
              onPress={() => this.props.logOut()}
            >
              <RkText rkType='header6'>Deslogar</RkText>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    )
  }
}

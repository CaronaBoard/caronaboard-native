import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Settings } from '../components/Settings'
import { screens } from '../../../navigation/Screens'
import { sendPasswordResetEmail, signOut } from '../../../services/firebase/Authentication'
import { destructiveAlert } from '../../../navigation/Alert'

class SettingsContainer extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
  }

  pushProfileScreen = () => {
    this.props.navigator.push({
      screen: screens.profile.id,
      title: screens.profile.title
    })
  }

  eraseUserData = () => {
    destructiveAlert(
      'Se voce confirmar, TODOS seus dados registrados' +
      ' no carona board serāo PERMANENTEMENTE apagados',
      () => alert('Ainda nāo implementamos isto. :P')
    )
  }

  logOutUser = () => {
    signOut()
  }

  resetPassword = async () => {
    try {
      await sendPasswordResetEmail(this.props.user.email)
      alert('Verifique sua caixa de mensagem, voce receberá um email em instantes')
    } catch (error) {
      alert(error)
    }
  }

  render () {
    return (
      <Settings
        openProfile={this.pushProfileScreen}
        eraseUserData={this.eraseUserData}
        logOut={this.logOutUser}
        resetPassword={this.resetPassword}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.userData
  }
}

export default connect(mapStateToProps)(SettingsContainer)

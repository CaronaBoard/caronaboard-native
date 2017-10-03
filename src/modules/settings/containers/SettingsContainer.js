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

  pushFeedbackScreen = () => {
    this.props.navigator.push({
      screen: screens.feedback.id,
      title: screens.feedback.title
    })
  }

  eraseUserData = () => {
    destructiveAlert(
      'If you confirm all your personal data will be erased from outr system,',
      () => alert('Feature not implemented :P')
    )
  }

  logOutUser = () => {
    signOut()
  }

  resetPassword = async () => {
    try {
      await sendPasswordResetEmail(this.props.user.email)
      alert('Check your email box, an email to redefine you password was sent')
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
        openFeedback={this.pushFeedbackScreen}
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

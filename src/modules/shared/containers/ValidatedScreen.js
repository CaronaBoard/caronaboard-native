import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { WarningScreen } from '../components/WarningScreen.style'

class ValidatedScreen extends Component {
  static propTypes = {
    uid: PropTypes.string.isRequired,
    group: PropTypes.object.isRequired
  }

  render () {
    const { uid, children, group, emailVerified } = this.props

    if (!uid || !group.id) {
      return (<WarningScreen uid={uid} activeGroups={group} emailVerified={emailVerified} />)
    }

    return (
      <View style={{flex: 1}}>
        {children}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    uid: state.auth.profile.uid,
    emailVerified: state.auth.userData.emailVerified,
    group: state.ride.group
  }
}

export default connect(mapStateToProps)(ValidatedScreen)

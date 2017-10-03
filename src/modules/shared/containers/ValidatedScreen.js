import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getActiveGroup } from '../../../services/firebase/database/Groups'
import { WarningScreen } from '../components/WarningScreen.style'

class ValidatedScreen extends Component {
  static propTypes = {
    uid: PropTypes.string.isRequired
  }

  render () {
    const { uid, children } = this.props
    const activeGroup = getActiveGroup()

    if (!uid || !activeGroup) {
      return (<WarningScreen uid={uid} activeGroups={activeGroup} />)
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
    uid: state.auth.profile.uid
  }
}

export default connect(mapStateToProps)(ValidatedScreen)

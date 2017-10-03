import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { GroupsScreen } from '../components/GroupsScreen'

class GroupsScreenContainer extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
  }

  state = {
    groups: []
  }

  componentDidMount = () => {

  }

  render () {
    return (
      <GroupsScreen
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.userData
  }
}

export default connect(mapStateToProps)(GroupsScreenContainer)

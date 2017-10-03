import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { GroupsScreen } from '../components/GroupsScreen'
import { askToJoinGroup, fetchGroups } from '../../../services/firebase/database/Groups'
import { LoadingSpinnerView } from '../../shared/components/LoadingSpinnerView'
import { confirmationAlert } from '../../../navigation/Alert'

class GroupsScreenContainer extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
  }

  state = {
    groups: [],
    loading: false
  }

  async componentDidMount () {
    const groups = await fetchGroups()
    this.setState({groups, loading: false})
  }

  joinGroup = async (group) => {
    const { state } = this
    this.setState({...state, loading: true})
    confirmationAlert('Deseja solicitar entrada para este grupo?', async () => askToJoinGroup(group, this.props.profile))
    this.setState({...state, loading: false})
  }

  render () {
    return (
      <LoadingSpinnerView isLoading={this.state.loading}>
        <GroupsScreen
          groups={this.state.groups}
          uid={this.props.user.uid}
          joinGroup={this.joinGroup}
        />
      </LoadingSpinnerView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.userData,
    profile: state.auth.profile
  }
}

export default connect(mapStateToProps)(GroupsScreenContainer)

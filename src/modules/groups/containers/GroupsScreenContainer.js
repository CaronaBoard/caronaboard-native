import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { GroupsScreen } from '../components/GroupsScreen'
import { askToJoinGroup, changeGroup, fetchGroups } from '../../../services/firebase/database/Groups'
import { LoadingSpinnerView } from '../../shared/components/LoadingSpinnerView'
import { confirmationAlert } from '../../../navigation/Alert'
import { updateRideGroup } from '../../../redux/actions/sync/RideRequestActions'

class GroupsScreenContainer extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    group: PropTypes.object.isRequired,
    updateGroup: PropTypes.func.isRequired
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

  selectGroup = async (group) => {
    this.props.updateGroup(group)
    changeGroup(group.id)
  }

  render () {
    return (
      <LoadingSpinnerView isLoading={this.state.loading}>
        <GroupsScreen
          groups={this.state.groups}
          uid={this.props.profile.uid}
          joinGroup={this.joinGroup}
          changeGroup={this.selectGroup}
          activeGroup={this.props.group}
        />
      </LoadingSpinnerView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.auth.profile,
    group: state.ride.group
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateGroup: group => (dispatch(updateRideGroup(group)))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupsScreenContainer)

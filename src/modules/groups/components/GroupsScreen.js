import React from 'react'
import { RkText } from 'react-native-ui-kitten'
import {
  ScrollView,
  View,
  TouchableOpacity
} from 'react-native'
import PropTypes from 'prop-types'

import { styles } from './styles/GroupsScreen.style'
import { GroupPropType } from '../types'
import { WarningScreen } from '../../shared/components/WarningScreen.style'

const hardCodedGroup = {
  'id': 'twpoa',
  'members': {},
  'name': 'ThoughtWorks POA'
}

export class GroupsScreen extends React.Component {
  static propTypes = {
    uid: PropTypes.string.isRequired,
    groups: PropTypes.arrayOf(GroupPropType).isRequired,
    joinGroup: PropTypes.func.isRequired,
    changeGroup: PropTypes.func.isRequired,
    activeGroup: PropTypes.oneOfType([GroupPropType, {}])
  }

  renderActiveGroup = (title, activeGroup) => {
    if (!activeGroup.name) {
      return null
    }

    return (
      <View style={styles.section}>
        <View style={[styles.row, styles.heading]}>
          <RkText rkType='primary header6'>{title}</RkText>
        </View>
        <View style={styles.row} >
          <View
            style={styles.rowButton}
          >
            <RkText rkType='header6'>{activeGroup.name}</RkText>
          </View>
        </View>
      </View>
    )
  }

  renderGroupList = (title, group, onPress = () => null) => {
    return (
      <View style={styles.section}>
        <View style={[styles.row, styles.heading]}>
          <RkText rkType='primary header6'>{title}</RkText>
        </View>
        {group.map(group => {
          return (
            <View style={styles.row} key={group.id}>
              <TouchableOpacity
                style={styles.rowButton}
                onPress={() => onPress(group)}
              >
                <RkText rkType='header6'>{group.name}</RkText>
              </TouchableOpacity>
            </View>
          )
        })}
      </View>
    )
  }

  render () {
    const {groups, uid, joinGroup, changeGroup, activeGroup} = this.props
    const groupsYouBelong = [hardCodedGroup]

    groups.forEach(group => {
      if (group.members.hasOwnProperty(uid)) {
        groupsYouBelong.push(group)
      }
    })

    if (!uid) {
      return (
        <WarningScreen activeGroup={'Must have profile first'} />
      )
    }

    return (
      <ScrollView style={styles.container}>
        {this.renderActiveGroup('GRUPO ATIVO', activeGroup)}
        {this.renderGroupList('GRUPOS QUE VOCE PERTENCE', groupsYouBelong, changeGroup)}
        {this.renderGroupList('TODOS OS GRUPOS', groups, joinGroup)}
      </ScrollView>
    )
  }
}

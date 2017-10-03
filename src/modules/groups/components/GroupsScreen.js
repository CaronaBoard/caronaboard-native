import React from 'react'
import { RkText } from 'react-native-ui-kitten'
import {
  ScrollView,
  View,
  TouchableOpacity
} from 'react-native'
import PropTypes from 'prop-types'

import { styles } from './styles/GroupsScreen.style'

export class GroupsScreen extends React.Component {
  static propTypes = {
    uid: PropTypes.string.isRequired,
    groups: PropTypes.array.isRequired,
    joinGroup: PropTypes.func.isRequired,
    changeGroup: PropTypes.func.isRequired,
    activeGroup: PropTypes.string.isRequired
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
    const groupsYouBelong = []

    groups.forEach(group => {
      if (group.members.hasOwnProperty(uid)) {
        groupsYouBelong.push(group)
      }
    })

    return (
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <View style={[styles.row, styles.heading]}>
            <RkText rkType='primary header6'>GRUPO ATUAL</RkText>
          </View>
          <View style={styles.row} >
            <View
              style={styles.rowButton}
            >
              <RkText rkType='header6'>{activeGroup}</RkText>
            </View>
          </View>
        </View>
        {this.renderGroupList('GRUPOS QUE VOCE PERTENCE', groupsYouBelong, changeGroup)}
        {this.renderGroupList('TODOS OS GRUPOS', groups, joinGroup)}
      </ScrollView>
    )
  }
}

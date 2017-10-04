// @flow

// TODO: Improve this implementation, in case of empty activeGroup application crashes

import { ref } from './'
import type { GroupType, ProfileType } from '../types'
import { toGroupsArray } from '../Conversion'

let activeGroup = 'twpoa'

export const changeGroup = (groupId: string) => {
  activeGroup = groupId
}

export const getActiveGroup = (): string => {
  if (!activeGroup) {
    return ''
  }
  return activeGroup
}

export const fetchGroups = async (): Array<GroupType> => {
  const path = 'groups'
  const groupSnapshot = await ref(path).once('value')
  return toGroupsArray(groupSnapshot.val())
}

export const askToJoinGroup = async (group: GroupType, profile: ProfileType) => {
  const path = `joinGroupRequests/${group.id}/${profile.uid}`
  await ref(path).update(profile)
}

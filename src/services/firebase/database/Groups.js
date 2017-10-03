// @flow

import { ref } from './'
import type { GroupType, ProfileType } from '../types'
import { toGroupsArray } from '../Conversion'

export const fetchGroups = async (): Array<GroupType> => {
  const path = 'groups'
  const groupSnapshot = await ref(path).once('value')
  return toGroupsArray(groupSnapshot.val())
}

export const askToJoinGroup = async (group: GroupType, profile: ProfileType) => {
  console.log(group, 'is ===> group')
  const path = `joinGroupRequests/${group.id}/${profile.uid}`
  await ref(path).update(profile)
}

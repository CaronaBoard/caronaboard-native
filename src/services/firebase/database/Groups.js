// @flow

import { ref } from './'
import type { GroupType } from '../types'
import { toGroupsArray } from '../Conversion'

export const fetchGroups = async (): Array<GroupType> => {
  const path = 'groups'
  const groupSnapshot = await ref(path).once('value')
  return toGroupsArray(groupSnapshot.val())
}

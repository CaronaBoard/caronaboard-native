import { string, any, shape } from 'prop-types'

// '60eqPCFvlfaZVkHZn8ehqTm5IEJ3': { admin: true }
export const GroupMemberPropType = any

export const GroupPropType = shape({
  id: string.isRequired,
  name: string.isRequired,
  members: GroupMemberPropType
})

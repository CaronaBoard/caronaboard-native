import { shape, bool, string } from 'prop-types'

export const alertPropType = shape({
  showAlert: bool.isRequired,
  message: string
}).isRequired

export const profilePropType = shape({
  name: string.isRequired,
  contact: shape({
    kind: string.isRequired,
    value: string.isRequired
  })
})

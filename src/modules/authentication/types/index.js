import { shape, bool, string } from 'prop-types'

export const AlertPropType = shape({
  showAlert: bool.isRequired,
  message: string
}).isRequired

export const ProfilePropType = shape({
  name: string.isRequired,
  contact: shape({
    kind: string.isRequired,
    value: string.isRequired
  })
})

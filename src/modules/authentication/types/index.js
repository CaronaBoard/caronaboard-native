import { shape, bool, string } from 'prop-types'

export const alertType = shape({
  showAlert: bool.isRequired,
  message: string
}).isRequired

import { string, number, shape, oneOfType } from 'prop-types'

export const ridePropTypes = shape({
  days: string.isRequired,
  destination: string.isRequired,
  hours: string.isRequired,
  origin: string.isRequired,
  driverId: string.isRequired,
  rideId: string.isRequired,
  profile: shape({
    name: string.isRequired,
    contact: shape({
      kind: string.isRequired,
      value: oneOfType([string, number]).isRequired
    })
  })
}).isRequired

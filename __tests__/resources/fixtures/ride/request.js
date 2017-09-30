import type { RideRequestFlowType } from '../../../../src/services/firebase/types'
import { profileFixture } from '../user/index'

export const rideRequestFixture: RideRequestFlowType = {
  requestId: 'requestId',
  rideId: 'rideId',
  profile: profileFixture
}

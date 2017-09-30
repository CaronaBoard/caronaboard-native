import { FETCH_ALL_RIDE_REQUESTS } from '../../../../src/redux/types'
import { updateRideRequests } from '../../../../src/redux/actions/sync/RideRequestActions'

describe('RideRequest sync actions', () => {
  it('Should create an action to update ride requests', async () => {
    const rides = []
    const expectedAction = {
      type: FETCH_ALL_RIDE_REQUESTS,
      payload: rides
    }
    const action = updateRideRequests(rides)

    expect(action).toEqual(expectedAction)
  })
})

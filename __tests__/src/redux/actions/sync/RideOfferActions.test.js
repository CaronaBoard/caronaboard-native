import { UPDATE_RIDE_OFFERS } from '../../../../../src/redux/types'
import { updateRideOffers } from '../../../../../src/redux/actions/sync/RideOfferActions'

describe('RideOffer sync actions', () => {
  it('Should create an action for update ride offers', async () => {
    const rides = []
    const expectedAction = {
      type: UPDATE_RIDE_OFFERS,
      payload: rides
    }
    const action = updateRideOffers(rides)

    expect(action).toEqual(expectedAction)
  })
})

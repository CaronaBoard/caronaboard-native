import { UPDATE_RIDE_OFFERS } from '../../../../../src/redux/types'
import { updateRideOffers, updateYourRideOffers } from '../../../../../src/redux/actions/sync/RideOfferActions'
import { rideOfferFixture } from '../../../../resources/fixtures/ride/offer'
import { UPDATE_YOUR_RIDE_OFFERS } from '../../../../../src/redux/types/RideOfferTypes'

describe('RideOffer sync actions', () => {
  it('Should create an action for update ride offers', async () => {
    const rides = [rideOfferFixture]
    const expectedAction = {
      type: UPDATE_RIDE_OFFERS,
      offers: rides
    }
    const action = updateRideOffers(rides)

    expect(action).toEqual(expectedAction)
  })

  it('Should create an action for update your ride offers', async () => {
    const rides = [rideOfferFixture]
    const expectedAction = {
      type: UPDATE_YOUR_RIDE_OFFERS,
      yourOffers: rides
    }
    const action = updateYourRideOffers(rides)

    expect(action).toEqual(expectedAction)
  })
})

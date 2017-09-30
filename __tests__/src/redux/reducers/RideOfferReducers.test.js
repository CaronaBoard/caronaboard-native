import RideOfferReducers, { INITIAL_STATE } from '../../../../src/redux/reducers/RideReducers'
import { updateRideRequests } from '../../../../src/redux/actions/sync/RideRequestActions'
import { updateRideOffers } from '../../../../src/redux/actions/sync/RideOfferActions'
import { rideOffer } from '../../../resources/fixtures/ride/offer'

describe('RideOfferReducers', () => {
  it('Should handle UPDATE_RIDE_OFFERS action type', async () => {
    const action = updateRideOffers([rideOffer])
    const state = RideOfferReducers(INITIAL_STATE, action)
    const expectedState = { offers: action.payload, requests: [] }

    expect(state).toEqual(expectedState)
  })

  it('Should handle UPDATE_RIDE_REQUESTS action type', async () => {
    const action = updateRideRequests([rideOffer])
    const state = RideOfferReducers(INITIAL_STATE, action)
    const expectedState = { requests: action.payload, offers: [] }

    expect(state).toEqual(expectedState)
  })
})

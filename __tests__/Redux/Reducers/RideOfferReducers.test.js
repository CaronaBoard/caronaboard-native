import RideOfferReducers, { INITIAL_STATE } from '../../../src/Redux/Reducers'
import { fetchAllRides } from '../../../src/Redux/Actions'

describe('RideOfferReducers', () => {
  it('Should handle FETCH_ALL_RIDES action type', () => {
    const action = fetchAllRides()
    const state = RideOfferReducers(INITIAL_STATE, action)

    expect(state.rideOffer.rides).toEqual(action.payload)
  })
})

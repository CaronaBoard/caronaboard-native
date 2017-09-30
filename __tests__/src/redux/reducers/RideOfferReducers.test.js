import RideOfferReducers, { INITIAL_STATE } from '../../../../src/redux/reducers/RideReducers'
import { updateRideRequests } from '../../../../src/redux/actions/sync/RideRequestActions'
import { updateRideOffers } from '../../../../src/redux/actions/sync/RideOfferActions'

const mockedRides = {
  driverId: 'AIYmwTmrdTfUuGeuoNF0SYgXJ1j1',
  rideId: '-KndyvnnlSN05mJxL57Q',
  origin: 'PUC',
  destination: 'Bomfim',
  days: 'Seg-Sex',
  hours: '19h',
  profile: {
    name: 'Eduardo Moroni',
    contact: {
      kind: 'Whatsapp',
      value: '+5559999999',
      uid: ''
    }
  }
}

describe('RideOfferReducers', () => {
  it('Should handle UPDATE_RIDE_OFFERS action type', async () => {
    const action = updateRideOffers(mockedRides)
    const state = RideOfferReducers(INITIAL_STATE, action)
    const expectedState = { offers: action.payload, requests: [] }

    expect(state).toEqual(expectedState)
  })

  it('Should handle UPDATE_RIDE_REQUESTS action type', async () => {
    const action = updateRideRequests(mockedRides)
    const state = RideOfferReducers(INITIAL_STATE, action)
    const expectedState = { requests: action.payload, offers: [] }

    expect(state).toEqual(expectedState)
  })
})

import RideOfferReducers, { INITIAL_STATE } from '../../../src/redux/reducers/RideReducers'
import { fetchAllRideOffers } from '../../../src/redux/actions'
import { extractActionFromThunk } from '../../__mocks__/ReduxThunkMock'

import * as FirebaseService from '../../../src/services/firebase'
jest.mock('../../../src/services/firebase')

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
      value: '+5559999999'
    }
  }
}

describe('RideOfferReducers', () => {
  it('Should handle FETCH_ALL_RIDES action type', async () => {
    FirebaseService.getAllRideOffers = jest.fn(() => mockedRides)

    const action = await extractActionFromThunk(fetchAllRideOffers)
    const state = RideOfferReducers(INITIAL_STATE, action)
    const expectedState = { rides: action.payload }

    expect(state).toEqual(expectedState)
  })
})

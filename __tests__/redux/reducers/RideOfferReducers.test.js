import RideOfferReducers, { INITIAL_STATE } from '../../../src/redux/reducers/RideOfferReducers'
import { fetchAllRides } from '../../../src/redux/actions'

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

const firstMockCall = 0
const firstArgument = 0

describe('RideOfferReducers', () => {
  const dispatchMock = jest.fn()

  it('Should handle FETCH_ALL_RIDES action type', async () => {
    FirebaseService.getAllRides = jest.fn(() => mockedRides)

    const thunk = fetchAllRides()
    await thunk(dispatchMock)

    const action = dispatchMock.mock.calls[firstMockCall][firstArgument]
    const state = RideOfferReducers(INITIAL_STATE, action)

    expect(state.rides).toEqual(action.payload)
  })
})

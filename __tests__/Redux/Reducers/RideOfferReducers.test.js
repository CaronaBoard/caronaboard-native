import RideOfferReducers, { INITIAL_STATE } from '../../../src/Redux/Reducers'
import { fetchAllRides } from '../../../src/Redux/Actions'
import * as FirebaseService from '../../../src/Services/Firebase'

jest.mock('../../../src/Services/Firebase')
FirebaseService.getAllRides = jest.fn(() => mockedRides)

const mockedRides = {
  'hours': '19h',
  'days': 'Seg a Sex',
  'origin': 'Tecnopuc',
  'destination': 'Rodoviaria'
}

const firstMockCall = 0
const firstArgument = 0

describe('RideOfferReducers', () => {
  it('Should handle FETCH_ALL_RIDES action type', async () => {
    const mockDispatch = jest.fn()
    const thunk = fetchAllRides()
    await thunk(mockDispatch)

    const action = mockDispatch.mock.calls[firstMockCall][firstArgument]
    const state = RideOfferReducers(INITIAL_STATE, action)

    expect(state.rideOffer.rides).toEqual(action.payload)
  })
})

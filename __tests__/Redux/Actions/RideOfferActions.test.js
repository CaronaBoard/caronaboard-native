import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { FETCH_ALL_RIDES } from '../../../src/Redux/Types'
import { fetchAllRides } from '../../../src/Redux/Actions'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const mockedRides = {
  'area': 'Aeroporto',
  'days': 'Seg a Sex',
  'destination': 'Rodoviaria',
  'flexible': true,
  'formUrl': 'https://goo.gl/forms/',
  'hours': '19h',
  'name': 'Hugh Jackman',
  'origin': 'Tecnopuc',
  'id': 1
}

jest.mock('../../../src/Services/Firebase', () => {
  return {
    getAllRides: jest.fn(() => mockedRides)
  }
})

describe('RideOffer Actions', () => {
  it('Should fetch all ride offers', () => {
    const expectedAction = [{
      type: FETCH_ALL_RIDES,
      payload: mockedRides
    }]

    const store = mockStore({ rideOffer: {rides: []} })

    return store.dispatch(fetchAllRides()).then(() => {
      expect(store.getActions()).toEqual(expectedAction)
    })
  })
})

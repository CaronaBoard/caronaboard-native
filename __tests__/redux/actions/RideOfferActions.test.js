import { FETCH_ALL_RIDES } from '../../../src/redux/types'
import { fetchAllRides } from '../../../src/redux/actions'

import * as FirebaseService from '../../../src/services/firebase'
jest.mock('../../../src/services/firebase')

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

describe('RideOffer actions', () => {
  const dispatchMock = jest.fn()

  it('Should create a thunk for fetching all rides', async () => {
    FirebaseService.getAllRides = jest.fn(() => mockedRides)

    const expectedAction = {
      type: FETCH_ALL_RIDES,
      payload: mockedRides
    }

    const thunk = fetchAllRides()
    await thunk(dispatchMock)

    expect(dispatchMock).toHaveBeenCalledWith(expectedAction)
  })
})

import { FETCH_ALL_RIDES } from '../../../src/Redux/Types'
import { fetchAllRides } from '../../../src/Redux/Actions'
import { getAllRides } from '../../../src/Services/Firebase'

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
    // getAllRides: jest.fn({
    //   return new Promise(resolve => {
    //     process.nextTick(
    //       () => resolve(mockedRides)
    //     )
    //   })
    // })
  }
})

describe('RideOffer Actions', () => {
  it('Should fetch all ride offers', () => {
    const thunk = fetchAllRides()
    const dispatchMock = jest.fn()
    const expectedAction = {
      type: FETCH_ALL_RIDES,
      payload: mockedRides
    }

    thunk(dispatchMock)

    expect(getAllRides).toHaveBeenCalled()
    expect(dispatchMock).toHaveBeenCalledWith(expectedAction)
  })
})

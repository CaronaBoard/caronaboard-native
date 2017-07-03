import { FETCH_ALL_RIDES } from '../../../src/Redux/Types'
import { fetchAllRides } from '../../../src/Redux/Actions'

describe('RideOffer Actions', () => {
  it('Should fetch all ride offers', () => {
    const action = fetchAllRides()
    const expectedRides = [{
      'area': 'Aeroporto',
      'days': 'Seg a Sex',
      'destination': 'Rodoviaria',
      'flexible': true,
      'formUrl': 'https://goo.gl/forms/',
      'hours': '19h',
      'name': 'Hugh Jackman',
      'origin': 'Tecnopuc',
      'id': 1
    }]

    const expectedAction = {
      type: FETCH_ALL_RIDES,
      payload: expectedRides
    }

    expect(action).toEqual(expectedAction)
  })
})

import { FETCH_ALL_RIDES } from '../Types'

const ride = {
  'area': 'Aeroporto',
  'days': 'Seg a Sex',
  'destination': 'Rodoviaria',
  'flexible': true,
  'formUrl': 'https://goo.gl/forms/',
  'hours': '19h',
  'name': 'Hugh Jackman',
  'origin': 'Tecnopuc'
}

const fakeCall = () => {
  return [{...ride, id: 1}, {...ride, id: 2}, {...ride, id: 3}, {...ride, id: 4}, {...ride, id: 5}, {...ride, id: 6}]
}

export function fetchAllRides () {
  return {
    type: FETCH_ALL_RIDES,
    payload: fakeCall()
  }
}

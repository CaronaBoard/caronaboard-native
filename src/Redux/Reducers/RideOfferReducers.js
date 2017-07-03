import { FETCH_ALL_RIDES } from '../Types'

export const INITIAL_STATE = {
  rides: [{
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
}

export default (state = INITIAL_STATE, action) => {
  console.log('Action', action)
  switch (action.type) {
    case FETCH_ALL_RIDES:
      return { rides: action.payload }
    default:
      return state
  }
}

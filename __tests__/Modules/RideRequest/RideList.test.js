import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { RideList } from '../../../src/Modules/RideRequest/Containers/RideList'

const props = {
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
  }],
  fetchRides: jest.fn()
}

describe('<RideList />', () => {
  const wrapper = shallow(<RideList {...props} />)

  it('Should have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

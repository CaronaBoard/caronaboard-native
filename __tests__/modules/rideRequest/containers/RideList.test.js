import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { RideList } from '../../../../src/modules/rideRequest/containers/RideList'

const props = {
  rides: [{
    'area': 'Aeroporto',
    'days': 'Seg a Sex',
    'destination': 'Rodoviaria',
    'hours': '19h',
    'origin': 'Tecnopuc',
    'driverId': 'Some UID',
    'rideId': 'Ride ID',
    'profile': {
      'contact': {
        'kind': 'Whatsapp', 'value': '5198269999'
      },
      'name': 'Eduardo' }
  }],
  fetchRides: jest.fn(),
  navigator: {
    setOnNavigatorEvent: jest.fn()
  }
}

describe('<RideList />', () => {
  const wrapper = shallow(<RideList {...props} />)

  it('Should have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

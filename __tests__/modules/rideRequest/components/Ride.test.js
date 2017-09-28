import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { Ride } from '../../../../src/modules/rideRequest/components/Ride'

const props = {
  ride: {
    'driverId': 'driverId',
    'rideId': 'rideId',
    'area': 'Aeroporto',
    'days': 'Seg a Sex',
    'destination': 'Rodoviaria',
    'hours': '19h',
    'origin': 'Tecnopuc',
    'profile': {
      'contact': {
        'kind': 'Whatsapp', 'value': '5198269999'
      },
      'name': 'Eduardo' }
  },
  userId: 'kakaroto'
}

describe('<Ride />', () => {
  const wrapper = shallow(<Ride {...props} />)

  it('Should have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

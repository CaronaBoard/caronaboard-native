import React from 'react'
import { shallow } from 'enzyme'
import { RideRequestScreen } from '../../../../src/modules/rideRequest/containers/NewRideRequestContainer'

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

describe('<RideRequestScreen />', () => {
  const wrapper = shallow(<RideRequestScreen {...props} />)

  it('Snapshot have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

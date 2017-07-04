import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { Ride } from '../../../../src/Modules/RideRequest/Components/Ride'

const props = {
  ride: {
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
  }
}

describe('<Ride />', () => {
  const wrapper = shallow(<Ride {...props} />)

  it('Should have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

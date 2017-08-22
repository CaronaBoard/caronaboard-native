import React from 'react'
import { shallow } from 'enzyme'
import { RideRequestScreen } from '../../../../src/modules/rideRequest/containers/RideRequestScreen'
import { GradientButton } from '../../../../src/modules/shared/components'

import * as Firebase from '../../../../src/services/firebase'
jest.mock('../../../../src/services/firebase')

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
  }
}

describe.only('<RideRequestScreen />', () => {
  const wrapper = shallow(<RideRequestScreen {...props} />)

  it('Snapshot have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Should call firebase service to request a ride', () => {
    // TODO: I Think that' not a good idea calling services directly, we should use action
    Firebase.saveRideRequest = jest.fn()
    wrapper.find(GradientButton).simulate('press')
    expect(Firebase.saveRideRequest).toHaveBeenCalledWith(props.ride.rideId)
  })
})

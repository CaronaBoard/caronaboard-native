import React from 'react'
import { shallow } from 'enzyme'
import { RideOfferScreen } from '../../../../src/Modules/RideRequest/Containers/RideRequestScreen'
import { Button } from '../../../../src/Modules/Shared/Components'

import * as Firebase from '../../../../src/Services/Firebase'
jest.mock('../../../../src/Services/Firebase')

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

describe.only('<RideOfferScreen />', () => {
  const wrapper = shallow(<RideOfferScreen {...props} />)

  it('Snapshot have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Should call firebase service to request a ride', () => {
    // TODO: I Think that' not a good idea calling services directly, we should use action
    Firebase.saveRideRequest = jest.fn()
    wrapper.find(Button).simulate('press')
    expect(Firebase.saveRideRequest).toHaveBeenCalledWith(props.ride.rideId)
  })
})

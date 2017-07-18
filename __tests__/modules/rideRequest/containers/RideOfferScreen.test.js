import React from 'react'
import { shallow } from 'enzyme'
import { RideOfferScreen, INITIAL_STATE } from '../../../../src/modules/rideRequest/containers/RideOfferScreen'
import { Button } from '../../../../src/modules/shared/components'

import * as Firebase from '../../../../src/services/Firebase'
jest.mock('../../../../src/services/Firebase')

describe('<RideOfferScreen />', () => {
  const wrapper = shallow(<RideOfferScreen />)

  it('Snapshot have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Should call firebase service for create a ride offer', () => {
    // TODO: I Think that' not a good idea calling services directly, we should use action
    Firebase.saveRideOffer = jest.fn()
    wrapper.find(Button).simulate('press')
    expect(Firebase.saveRideOffer).toHaveBeenCalledWith(INITIAL_STATE)
  })
})

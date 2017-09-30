import React from 'react'
import { shallow } from 'enzyme'
import { RideRequestScreen } from '../../../../../src/modules/rideRequest/containers/NewRideRequestContainer'
import { rideOfferFixture } from '../../../../resources/fixtures/ride/offer'

const props = {
  ride: rideOfferFixture,
  userId: 'kakaroto'
}

describe('<RideRequestScreen />', () => {
  const wrapper = shallow(<RideRequestScreen {...props} />)

  it('Snapshot have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

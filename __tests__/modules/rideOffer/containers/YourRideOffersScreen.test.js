import React from 'react'
import { shallow } from 'enzyme'
import { YourRideOffersScreen } from '../../../../src/modules/rideOffer/containers/YourRideOffersScreen'

const props = {
  profile: {}
}

describe('<YourRideOffersScreen />', () => {
  const wrapper = shallow(<YourRideOffersScreen {...props} />)

  it('Should have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

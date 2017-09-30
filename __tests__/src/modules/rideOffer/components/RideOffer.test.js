import React from 'react'
import { shallow } from 'enzyme'
import { RideOffer } from '../../../../../src/modules/rideOffer/components/RideOffer'

const props = {
  ride: {}
}

describe('<RideOffer />', () => {
  const wrapper = shallow(<RideOffer {...props} />)

  it('Should have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

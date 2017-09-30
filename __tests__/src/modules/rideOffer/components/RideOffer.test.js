import React from 'react'
import { shallow } from 'enzyme'
import { RideOffer } from '../../../../../src/modules/rideOffer/components/RideOffer'
import { rideOfferFixture } from '../../../../resources/fixtures/ride/offer'

const props = {
  ride: rideOfferFixture
}

describe('<RideOffer />', () => {
  const wrapper = shallow(<RideOffer {...props} />)

  it('Should have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

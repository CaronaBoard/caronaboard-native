import React from 'react'
import { shallow } from 'enzyme'
import { NewRideOfferContainer } from '../../../../../src/modules/rideOffer/containers/NewRideOfferContainer'

const props = {
  navigator: {
    setOnNavigatorEvent: jest.fn()
  },
  updateYourOffers: jest.fn(),
  userId: 'someId'
}

describe('<NewRideOfferContainer />', () => {
  const wrapper = shallow(<NewRideOfferContainer {...props} />)

  it('Snapshot have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

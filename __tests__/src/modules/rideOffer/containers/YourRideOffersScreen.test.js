import React from 'react'
import { shallow } from 'enzyme'
import { YourRideOffersScreen } from '../../../../../src/modules/rideOffer/containers/YourRideOffersScreen'
import { profileFixture } from '../../../../resources/fixtures/user'

const props = {
  uid: profileFixture.uid,
  updateYourOffers: jest.fn(),
  yourOffers: [],
  navigator: {
    setOnNavigatorEvent: jest.fn()
  }
}

describe('<YourRideOffersScreen />', () => {
  const wrapper = shallow(<YourRideOffersScreen {...props} />)

  it('Should have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

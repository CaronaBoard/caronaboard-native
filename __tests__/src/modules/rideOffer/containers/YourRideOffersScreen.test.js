import React from 'react'
import { shallow } from 'enzyme'
import { YourRideOffersScreen } from '../../../../../src/modules/rideOffer/containers/YourRideOffersScreen'
import { profileFixture } from '../../../../resources/fixtures/user/index'

const props = {
  profile: profileFixture,
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

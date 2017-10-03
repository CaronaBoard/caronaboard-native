import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { RideList } from '../../../../../src/modules/rideOffer/containers/RideOffersListContainer'
import { rideOfferFixture } from '../../../../resources/fixtures/ride/offer'

const props = {
  rides: [rideOfferFixture],
  fetchRides: jest.fn(),
  navigator: {
    setOnNavigatorEvent: jest.fn()
  },
  userId: 'kakaroto'
}

describe('<RideList />', () => {
  const wrapper = shallow(<RideList {...props} />)

  it('Should have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

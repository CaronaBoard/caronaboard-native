import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { Ride } from '../../../../../src/modules/rideRequest/components/Ride'
import { rideOfferFixture } from '../../../../resources/fixtures/ride/offer'

const props = {
  ride: rideOfferFixture,
  userId: 'kakaroto',
  onPress: jest.fn()
}

describe('<Ride />', () => {
  const wrapper = shallow(<Ride {...props} />)

  it('Should have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

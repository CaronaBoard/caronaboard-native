import React from 'react'
import { shallow } from 'enzyme'
import { NewRideOffer, INITIAL_STATE } from '../../../../../src/modules/rideOffer/components/NewRideOffer'
import { Button } from '../../../../../src/modules/shared/components'

const props = {
  onPress: jest.fn()
}

describe('<NewRideOffer />', () => {
  const wrapper = shallow(<NewRideOffer {...props} />)

  it('Should have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Should call firebase service for create a ride offer', () => {
    // TODO: I Think that' not a good idea calling services directly, we should use action
    wrapper.find(Button).simulate('press')
    const { origin, destination, days, hours } = INITIAL_STATE
    expect(props.onPress).toHaveBeenCalledWith({ origin, destination, days, hours })
  })
})

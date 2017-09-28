import React from 'react'
import { shallow } from 'enzyme'
import { FloatingActionButton } from '../../../../src/modules/shared/components/FloatingActionButton'

const props = {
  onPress: jest.fn()
}

describe('<FloatingActionButton />', () => {
  const wrapper = shallow(<FloatingActionButton {...props} />)

  it('Should have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

})

import React from 'react'
import { shallow } from 'enzyme'
import { GradientButton } from '../../../../src/modules/shared/components'

const props = {
  style: {}
}

describe('<GradientButton />', () => {
  it('Snapshot have a snapshot', () => {
    const wrapper = shallow(<GradientButton {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})

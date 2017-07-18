import React from 'react'
import { shallow } from 'enzyme'
import { RkButton } from 'react-native-ui-kitten'
import { Button } from '../../../../src/modules/shared/components'

const props = {
  text: 'texto',
  onPress: jest.fn()
}

describe('<Button />', () => {
  const wrapper = shallow(<Button {...props} />)

  it('Should have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Should call callback onPress', () => {
    wrapper.simulate('press')
    expect(props.onPress).toHaveBeenCalled()
  })

  it('Should have button text', () => {
    expect(wrapper.find(RkButton).prop('children')).toEqual(props.text)
  })
})

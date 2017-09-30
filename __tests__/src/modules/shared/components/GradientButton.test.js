import React from 'react'
import { shallow } from 'enzyme'
import { GradientButton } from '../../../../../src/modules/shared/components'
import { RkButton } from 'react-native-ui-kitten'

const props = {
  style: {},
  text: 'Button Text',
  onButtonPress: jest.fn()
}

describe('<GradientButton />', () => {
  const wrapper = shallow(<GradientButton {...props} />)

  it('Snapshot have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Should pass callback function to RkButton onPress', () => {
    const submitButton = wrapper.find(RkButton)
    expect(props.onButtonPress).toEqual(submitButton.prop('onButtonPress'))
  })
})

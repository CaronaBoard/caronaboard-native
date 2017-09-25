import React from 'react'
import { shallow } from 'enzyme'
import { RkTextInput } from 'react-native-ui-kitten'
import { TextInput } from '../../../../src/modules/shared/components'

const props = {
  placeholder: 'texto',
  onChangeText: jest.fn()
}

describe('<TextInput />', () => {
  const wrapper = shallow(<TextInput {...props} />)

  it('Should have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Should render RkTextInput correctly', () => {
    expect(wrapper.find(RkTextInput).prop('label')).toEqual(props.label)
    expect(wrapper.find(RkTextInput).prop('onChangeText')).toEqual(props.onChangeText)
  })
})

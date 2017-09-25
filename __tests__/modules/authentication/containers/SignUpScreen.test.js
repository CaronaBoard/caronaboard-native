import React from 'react'
import { shallow } from 'enzyme'
import { SignUpScreen } from '../../../../src/modules/authentication/containers/SignUpScreen'

const props = {
  navigator: {
    push: jest.fn()
  },
  signUp: jest.fn(),
  alert: {
    showAlert: false,
    message: ''
  }
}

describe('<SignUpScreen />', () => {
  it('Should have a snapshot', () => {
    const wrapper = shallow(<SignUpScreen {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})

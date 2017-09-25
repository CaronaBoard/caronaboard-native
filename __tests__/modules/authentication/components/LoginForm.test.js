import React from 'react'
import { shallow } from 'enzyme'
import { LoginForm } from '../../../../src/modules/authentication/components/LoginForm'

const props = {
  toast: {
    showAlert: false,
    message: ''
  },
  buttonText: 'buttonText',
  onButtonPress: jest.fn()
}

describe('<LoginForm />', () => {
  const email = 'duduzinho@uol.com'
  const password = 'marotagem'
  const INITIAL_STATE = {}
  const wrapper = shallow(<LoginForm {...props} />)

  it('Should have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Should update state as text input changes', () => {
    wrapper.setState(INITIAL_STATE)
    const emailInput = wrapper.findWhere(node => node.key() === 'email-input')
    const passwordInput = wrapper.findWhere(node => node.key() === 'password-input')

    emailInput.prop('onChangeText')(email)
    passwordInput.prop('onChangeText')(password)

    expect(wrapper.state('email')).toEqual(email)
    expect(wrapper.state('password')).toEqual(password)
  })
})

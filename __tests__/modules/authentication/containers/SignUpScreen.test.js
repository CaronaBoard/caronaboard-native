import React from 'react'
import { shallow } from 'enzyme'
import { SignUpScreen, INITIAL_STATE } from '../../../../src/modules/authentication/containers/SignUpScreen'
import { Button } from '../../../../src/modules/shared/components'

const props = {
  signUp: jest.fn(),
  alert: {
    showAlert: false,
    message: ''
  }
}

describe('<SignUpScreen />', () => {
  const email = 'duduzinho@uol.com'
  const password = 'marotagem'
  const wrapper = shallow(<SignUpScreen {...props} />)

  beforeEach(() => {
    wrapper.setState(INITIAL_STATE)
  })

  it('Should have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it.skip('Should update SignUpScreen state as text input changes', () => {
    const emailInput = wrapper.findWhere(node => node.key() === 'email-input')
    const passwordInput = wrapper.findWhere(node => node.key() === 'password-input')

    // Find out a better way to simulate onChangeText
    emailInput.prop('onChangeText')(email)
    passwordInput.prop('onChangeText')(password)

    expect(wrapper.state('email')).toEqual(email)
    expect(wrapper.state('password')).toEqual(password)
  })

  it.skip('Should call signUp passing username and password', () => {
    const submitButton = wrapper.find(Button)

    wrapper.setState({email, password})
    submitButton.simulate('press')

    expect(props.signUp).toHaveBeenCalledWith(email, password)
  })
})

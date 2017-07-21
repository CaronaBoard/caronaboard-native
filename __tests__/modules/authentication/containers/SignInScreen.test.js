import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { SignInScreen, INITIAL_STATE } from '../../../../src/modules/authentication/containers/SignInScreen'

const props = {
  navigator: {
    push: jest.fn()
  },
  userData: {},
  signIn: jest.fn()
}

describe('<SignInScreen />', () => {
  const email = 'duduzinho@uol.com'
  const password = 'marotagem'
  const wrapper = shallow(<SignInScreen {...props} />)

  beforeEach(() => {
    wrapper.setState(INITIAL_STATE)
  })

  it('Should have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Should update SignInScreen state as text input changes', () => {
    const emailInput = wrapper.findWhere(node => node.key() === 'email-input')
    const passwordInput = wrapper.findWhere(node => node.key() === 'password-input')

    // Find out a better way to simulate onChangeText
    emailInput.prop('onChangeText')(email)
    passwordInput.prop('onChangeText')(password)

    expect(wrapper.state('email')).toEqual(email)
    expect(wrapper.state('password')).toEqual(password)
  })

  it('Should call signIn passing username and password', () => {
    const signinButton = wrapper.findWhere(node => node.key() === 'signin-button')

    wrapper.setState({email, password})
    signinButton.simulate('press')

    expect(props.signIn).toHaveBeenCalledWith(email, password)
  })

  it('Should navigate to sign up screen on button is pressed', () => {
    const signupButton = wrapper.findWhere(node => node.key() === 'signup-button')

    signupButton.simulate('press')

    expect(props.navigator.push).toHaveBeenCalledWith({screen: 'carona.signUp'})
  })
})

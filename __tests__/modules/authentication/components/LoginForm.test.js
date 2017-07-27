import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { LoginForm } from '../../../../src/modules/authentication/components/LoginForm'

const props = {
  toast: {
    showAlert: false,
    message: ''
  }
}

describe('<LoginForm />', () => {
  const wrapper = shallow(<LoginForm {...props} />)

  it('Should have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it.skip('Should move all tests case from SignInScreen.test.js and SignUpScreen.test.js to HERE', () => {
    expect(false).toEqual(true)
  })
})

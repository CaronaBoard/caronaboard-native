import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { SignInScreen } from '../../../../../src/modules/authentication/containers/SignInScreen'
import { userDataFixture } from '../../../../resources/fixtures/user/index'

const props = {
  navigator: {
    push: jest.fn()
  },
  signIn: jest.fn(),
  user: userDataFixture,
  alert: {
    showAlert: false,
    message: ''
  }
}

describe('<SignInScreen />', () => {
  const wrapper = shallow(<SignInScreen {...props} />)

  it('Should have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

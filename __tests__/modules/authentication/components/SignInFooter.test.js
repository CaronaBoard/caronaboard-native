import React from 'react'
import { shallow } from 'enzyme'
import { SignInFooter } from '../../../../src/modules/authentication/components/SignInFooter'
import { RkButton } from 'react-native-ui-kitten'
import { screens } from '../../../../src/navigation/Screens'

const props = {
  email: 'email',
  navigator: {
    push: jest.fn()
  }
}

describe('<SignInFooter />', () => {
  const wrapper = shallow(<SignInFooter {...props} />)
  const keyIsEqualTo = key => n => n.key() === key

  it('Should have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should navigate to password recovery screen', () => {
    const forgotPasswordButton = wrapper.find(RkButton).findWhere(keyIsEqualTo('forgot-password-button'))
    forgotPasswordButton.simulate('press')
    expect(props.navigator.push).toHaveBeenCalledWith({ screen: screens.forgotPassword.id })
  })

  it('should navigate to signup screen', () => {
    const forgotPasswordButton = wrapper.find(RkButton).findWhere(keyIsEqualTo('signup-button'))
    forgotPasswordButton.simulate('press')
    expect(props.navigator.push).toHaveBeenCalledWith({ screen: screens.forgotPassword.id })
  })
})

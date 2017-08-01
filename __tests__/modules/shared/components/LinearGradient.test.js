import React from 'react'
import { View } from 'react-native'
import { shallow } from 'enzyme'
import { LinearGradient as iOSLinearGradient } from '../../../../src/modules/shared/components/LinearGradient.ios'
import { LinearGradient as AndroidLinearGradient } from '../../../../src/modules/shared/components/LinearGradient.android'

const props = {
  style: {},
  colors: 'blue',
  start: {x: 0.0, y: 0.5},
  end: {x: 0.0, y: 0.5},
  children: <View />
}

describe('<LinearGradient />', () => {
  describe('iOS', () => {
    it('Snapshot have a snapshot', () => {
      const wrapper = shallow(<iOSLinearGradient {...props} />)
      expect(wrapper).toMatchSnapshot()
    })
  })

  // https://github.com/CaronaBoard/caronaboard-native/issues/27
  describe('Android', () => {
    it('Snapshot have a snapshot', () => {
      const wrapper = shallow(<AndroidLinearGradient {...props} />)
      expect(wrapper).toMatchSnapshot()
    })
  })
})

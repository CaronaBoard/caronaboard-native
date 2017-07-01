import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import { testAction } from '../Redux/Actions/TestActions'
import { RkButton, RkText } from 'react-native-ui-kitten'
import Styles from './Styles/SignInScreenStyles'

export class TestScreen extends Component {
  render () {
    const { testCounter, increaseCounter } = this.props
    return (
      <View style={Styles.flexible}>
        <View style={Styles.container}>
          <View>
            <RkText style={Styles.title}>
              {testCounter}
            </RkText>
          </View>
          <View>
            <RkButton innerStyle={[Styles.buttonFontSize]}
              rkType='circle outline medium'
              onPress={() => increaseCounter()}>
              UPDATE STATE
            </RkButton>
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    testCounter: state.test.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch(testAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestScreen)

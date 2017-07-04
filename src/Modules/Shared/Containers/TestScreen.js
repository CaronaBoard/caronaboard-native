import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import { testAction } from '../../../Redux/Actions/TestActions'
import { RkText } from 'react-native-ui-kitten'
import { Button } from '../../Shared/Components'
import Styles from '../../Authentication/Containers/Styles/SignInScreenStyles'

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
          <Button text={'UPDATE STATE'} onPress={() => increaseCounter()} />
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

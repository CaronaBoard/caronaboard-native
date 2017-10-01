import React from 'react'
import PropTypes from 'prop-types'
import Animation from 'lottie-react-native'

export class LottieSpinner extends React.Component {
  static propTypes = {
    spinnerId: PropTypes.number
  }

  componentDidMount () {
    this.animation.play()
  }

  render () {
    return (
      <Animation
        loop
        ref={animation => { this.animation = animation }}
        style={{
          width: 200,
          height: 200
        }}
        source={require('../../../assets/animations/loading_9.json')}
      />
    )
  }
}

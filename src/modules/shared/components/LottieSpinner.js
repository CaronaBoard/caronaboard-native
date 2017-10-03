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
        style={this.props.style}
        source={require('../../../assets/animations/loading_1.json')}
      />
    )
  }
}

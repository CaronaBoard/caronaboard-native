import React from 'react'
import PropTypes from 'prop-types'
import LinearGradient from 'react-native-linear-gradient'
import { LottieSpinner } from './LottieSpinner'

export const LoadingSpinnerView = props => {
  const { isLoading, children } = props
  return (
    <LinearGradient colors={['transparent', 'blue']} style={{ flex: 1 }} >
      {isLoading ? <LottieSpinner spinnerId={1} /> : children}
    </LinearGradient>
  )
}

LoadingSpinnerView.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
}

LoadingSpinnerView.defaultProps = {
  isLoading: false
}

import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { LottieSpinner } from './LottieSpinner'
import { styles } from './styles/LoadingSpinnerView.style'

const renderOverlay = () => {
  return (
    <View style={styles.overlay}>
      <LottieSpinner style={styles.spinner} />
    </View>
  )
}

export const LoadingSpinnerView = props => {
  const { isLoading, children, style } = props
  const overlay = isLoading ? renderOverlay() : null

  return (
    <View style={style || styles.container} >
      {children}
      {overlay}
    </View>
  )
}

LoadingSpinnerView.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
}

LoadingSpinnerView.defaultProps = {
  isLoading: false
}

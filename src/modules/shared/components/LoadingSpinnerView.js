import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { LottieSpinner } from './LottieSpinner'

export const LoadingSpinnerView = props => {
  const { isLoading, children } = props

  if (!isLoading) {
    return (children)
  }

  return (
    <View style={styles.container} >
      {children}
      <View style={styles.overlay}>
        <LottieSpinner style={styles.spinner} />
      </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  overlay: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  spinner: {
    width: 200,
    height: 200
  }
})

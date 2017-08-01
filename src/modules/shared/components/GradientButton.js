import React from 'react'
import { RkButton, RkText, RkComponent } from 'react-native-ui-kitten'
import { LinearGradient } from './'

export class GradientButton extends RkComponent {
  componentName = 'GradientButton';
  typeMapping = {
    button: {},
    gradient: {},
    text: {}
  };

  renderContent (textStyle) {
    if (this.props.text) {
      return (
        <RkText style={textStyle}>
          {this.props.text}
        </RkText>
      )
    } else {
      return this.props.children
    }
  }

  render () {
    let {button, gradient, text: textStyle} = this.defineStyles()
    this.extractNonStyleValue(gradient, 'colors')
    let {style, onButtonPress, ...otherProps} = this.props

    return (
      <RkButton
        rkType='stretch'
        onButtonPress={onButtonPress}
        style={[button, style]}
        {...otherProps}>
        <LinearGradient
          style={[gradient]}>
          {this.renderContent(textStyle)}
        </LinearGradient>
      </RkButton>
    )
  }
}

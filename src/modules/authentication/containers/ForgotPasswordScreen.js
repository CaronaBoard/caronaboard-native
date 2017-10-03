import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { forgotPasswordFirebase } from '../../../redux/actions'
import { RkText, RkTextInput, RkAvoidKeyboard } from 'react-native-ui-kitten'
import { styles } from '../containers/styles/LoginScreenStyles'
import { View, Image, Keyboard } from 'react-native'
import { GradientButton } from '../../shared/components/index'
import Toast, { DURATION } from 'react-native-easy-toast'

export class ForgotPasswordScreen extends Component {
  static defaultProps = {
    email: '',
    toast: {
      showAlert: false,
      message: ''
    }
  }

  static propTypes = {
    resetPassword: PropTypes.func.isRequired,
    alert: PropTypes.shape({
      showAlert: PropTypes.bool.isRequired,
      message: PropTypes.string
    }).isRequired
  }

  state = {
    email: '',
    alert: {
      showAlert: false,
      message: ''
    }
  }

  constructor (props) {
    super(props)
    this.state = { ...this.state, email: props.email }
  }

  componentWillReceiveProps (nextProps) {
    const { showAlert, message } = nextProps.alert

    if (showAlert) {
      this.refs.toast.show(message, DURATION.LENGTH_LONG)
      setTimeout(() => {
        this.props.navigator.pop()
      }, DURATION.LENGTH_LONG)
    }
  }

  render () {
    const { resetPassword } = this.props
    return (
      <RkAvoidKeyboard
        style={styles.screen}
        onStartShouldSetResponder={e => true}
        onResponderRelease={e => Keyboard.dismiss()}>

        <View style={styles.header}>
          <Image style={styles.image} source={require('../../../assets/images/caronaboard-logo-azul.png')} />
          <RkText rkType='logo h0'>Caronaboard</RkText>
        </View>

        <RkTextInput
          onChangeText={(email) => { this.setState({email}) }}
          key='email-input'
          rkType='rounded'
          placeholder='Email'
          autoCapitalize='none'
          value={this.state.email}
          />
        <View style={styles.centralized}>
          <GradientButton
            rkType='large'
            style={styles.loginButton}
            text='Redefinir senha'
            onPress={() => resetPassword(this.state.email)}
          />
        </View>
        <Toast position='top' ref='toast' />
      </RkAvoidKeyboard>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    alert: state.auth.alert
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetPassword: (email) => dispatch(forgotPasswordFirebase(email))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordScreen)

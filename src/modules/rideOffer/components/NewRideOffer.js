import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { RkText } from 'react-native-ui-kitten'

import styles from './styles/YourRideOffer.style'
import { TextInput } from '../../shared/components/index'
import { LoadingSpinnerView } from '../../shared/components/LoadingSpinnerView'
import { GradientButton } from '../../shared/components/GradientButton'

export const INITIAL_STATE = {
  origin: '',
  destination: '',
  days: '',
  hours: '',
  loading: false
}

export class NewRideOffer extends React.PureComponent {
  state = INITIAL_STATE

  static propTypes = {
    onPress: PropTypes.func.isRequired
  }

  onPress = async () => {
    this.setState({loading: true})
    const { origin, destination, days, hours } = this.state
    await this.props.onPress({ origin, destination, days, hours })
    this.setState({loading: false})
  }

  render () {
    return (
      <LoadingSpinnerView isLoading={this.state.loading} style={styles.flexible}>
        <View style={styles.container}>
          <RkText style={styles.title}>
            Ride Offer
          </RkText>
          <View style={styles.inputTextsContainer}>
            <TextInput placeholder='ORIGEM' onChangeText={(origin) => this.setState({origin})} />
            <TextInput placeholder='DESTINO' onChangeText={(destination) => this.setState({destination})} />
            <TextInput placeholder='DIAS' onChangeText={(days) => this.setState({days})} />
            <TextInput placeholder='HORAS' onChangeText={(hours) => this.setState({hours})} />
            <View style={styles.centralized}>
              <GradientButton
                rkType='large'
                text={'Oferecer carona'}
                onPress={this.onPress}
              />
            </View>
          </View>
        </View>
      </LoadingSpinnerView>
    )
  }
}

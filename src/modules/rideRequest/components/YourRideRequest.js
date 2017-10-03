import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { RkCard } from 'react-native-ui-kitten'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { View, Text, TouchableOpacity } from 'react-native'

import { RidePropType } from '../types'
import Styles from './styles/YourRideRequest.style'
import { LoadingSpinnerView } from '../../shared/components/LoadingSpinnerView'

export class YourRideRequest extends Component {
  static propTypes = {
    ride: RidePropType.isRequired,
    onPress: PropTypes.func.isRequired,
    icon: PropTypes.node
  }

  state = {
    loading: false
  }

  onPress = async (ride) => {
    this.setState({loading: true})
    await this.props.onPress(ride)
    this.setState({loading: false})
  }

  render () {
    const { ride } = this.props
    const {
      origin,
      destination,
      days,
      hours,
      profile
    } = ride

    return (
      <LoadingSpinnerView isLoading={this.state.loading} >
        <TouchableOpacity onPress={() => this.onPress({ ride })}>
          <RkCard>
            <View rkCardContent>
              <View style={Styles.line} >
                <Text rkCardText>{`Você pediu carona para ${profile.name}`}</Text>
              </View>
              <View style={Styles.line} >
                <Text rkCardText>{`De: ${origin}`}</Text>
              </View>
              <View style={Styles.line} >
                <Text rkCardText>{`Para: ${destination}`}</Text>
              </View>
              <View style={Styles.line} >
                <Text rkCardText>{`Em: ${days}`}</Text>
              </View>
              <View style={Styles.line} >
                <Text rkCardText>{`As: ${hours}`}</Text>
              </View>
            </View>
            <Icon
              name='delete-forever'
              size={30}
              color='#900'
              style={Styles.icon}
            />
          </RkCard>
        </TouchableOpacity>
      </LoadingSpinnerView>
    )
  }
}

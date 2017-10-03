import { Alert } from 'react-native'

export const alert = (title: string, confirmCallback: Function) => {
  Alert.alert(
    title,
    'Só uma confirmaçāo se voce deseja apagar esta carona',
    [
      {
        text: 'Pode apagar!',
        style: 'destructive',
        onPress: confirmCallback
      },
      {
        text: 'Melhor nāo',
        style: 'cancel'
      }
    ],
    { cancelable: true }
  )
}

export const destructiveAlert = (explanation: string, confirmCallback: Function) => {
  Alert.alert(
    'Esta operaçāo nāo tem volta',
    explanation,
    [
      {
        text: 'Sim',
        style: 'destructive',
        onPress: confirmCallback
      },
      {
        text: 'Nāo',
        style: 'cancel'
      }
    ],
    { cancelable: true }
  )
}

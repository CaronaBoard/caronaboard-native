import { Alert } from 'react-native'

export const alert = (title: string, confirmCallback: Function) => {
  Alert.alert(
    title,
    'Just a confirmation whether you wanna delete this ride or not.',
    [
      {
        text: 'Sure thing, delete!',
        style: 'destructive',
        onPress: confirmCallback
      },
      {
        text: 'Not yet, Thanks',
        style: 'cancel'
      }
    ],
    { cancelable: true }
  )
}

export const destructiveAlert = (explanation: string, confirmCallback: Function) => {
  Alert.alert(
    'This options has no turn back',
    explanation,
    [
      {
        text: 'Sure thing, go ahead!',
        style: 'destructive',
        onPress: confirmCallback
      },
      {
        text: 'No, Thanks',
        style: 'cancel'
      }
    ],
    { cancelable: true }
  )
}

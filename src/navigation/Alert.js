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

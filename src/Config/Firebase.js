import Firebase from 'firebase'

// const config = {
//   apiKey: 'AIzaSyDfwHLwWKTqduazsf4kjbstJEA2E1sCeoI',
//   authDomain: 'caronaboard-61f75.firebaseapp.com',
//   databaseURL: 'https://caronaboard-61f75.firebaseio.com',
//   storageBucket: 'caronaboard-61f75.appspot.com',
//   messagingSenderId: '617045704123'
// }

const testconfig = {
  apiKey: 'AIzaSyCXKAkfE1JApRMaW8SYmy5l6L2AVVkJYfo',
  authDomain: 'testing-carona.firebaseapp.com',
  databaseURL: 'https://testing-carona.firebaseio.com',
  projectId: 'testing-carona',
  storageBucket: '',
  messagingSenderId: '715669242630'
}

const setup = () => {
  Firebase.initializeApp(testconfig)
}

export default { setup }

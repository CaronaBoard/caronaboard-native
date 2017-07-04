import Firebase from 'firebase'
import _ from 'lodash'

const config = {
  apiKey: 'AIzaSyDfwHLwWKTqduazsf4kjbstJEA2E1sCeoI',
  authDomain: 'caronaboard-61f75.firebaseapp.com',
  databaseURL: 'https://caronaboard-61f75.firebaseio.com',
  storageBucket: 'caronaboard-61f75.appspot.com',
  messagingSenderId: '617045704123'
}

let database = (() => {
  Firebase.initializeApp(config)
  return Firebase.database().ref()
})()

const toArrayOfRides = (firebaseResponse) => {
  console.log(_.flatMap(firebaseResponse, Object.values))
  return _.flatMap(firebaseResponse, Object.values)
}

export const getAllRides = () => {
  return new Promise((resolve, reject) => {
    database.child('rides/twpoa').once('value')
      .then(
        (snapshot) => resolve(toArrayOfRides(snapshot.val()))
      ).catch((error) => {
        console.log('Error occured during getting all rides from firebase.', error)
        reject(error)
      }
    )
  })
}

export const signIn = (email, password) => {
  return new Promise(resolve => {
    Firebase.auth().signInWithEmailAndPassword(email, password).then(resolve)
  })
}

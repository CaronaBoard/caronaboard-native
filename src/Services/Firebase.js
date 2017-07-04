import Firebase from 'firebase'
import _ from 'lodash'

const config = {
  apiKey: 'AIzaSyDfwHLwWKTqduazsf4kjbstJEA2E1sCeoI',
  authDomain: 'caronaboard-61f75.firebaseapp.com',
  databaseURL: 'https://caronaboard-61f75.firebaseio.com',
  storageBucket: 'caronaboard-61f75.appspot.com',
  messagingSenderId: '617045704123'
}

const group = 'twpoa'

type rideOfferType = {
  origin: string,
  destination: string,
  days: string,
  hour: string,
  profile: {
    name: string,
    contact: {
      kind: string,
      value: string
    }
  }
}

let database = (() => {
  Firebase.initializeApp(config)
  return Firebase.database()
})()

const toArrayOfRides = (firebaseResponse) => {
  return _.flatMap(firebaseResponse.val(), Object.values)
}

export const getAllRides = () => {
  return new Promise((resolve, reject) => {
    database
      .ref('rides')
      .child(group)
      .once('value')
      .then(
        (snapshot) => resolve(toArrayOfRides(snapshot))
      )
      .catch(reject)
  })
}

export const signIn = (email, password) => {
  return new Promise((resolve, reject) => {
    Firebase.auth().signInWithEmailAndPassword(email, password)
      .then(resolve)
      .catch(reject)
  })
}

export const saveRideOffer = (ride: rideOfferType) => {
  const userId = 's29iF96rLqRIj1O9WZ2p2BjR59J3' // firebase.auth().currentUser.uid

  const profile = {
    name: 'TEST',
    contact: {
      kind: 'Whatsapp',
      value: '5566778899'
    }
  } // firebase.database().ref(`profiles/${userId}`).once("value")

  return new Promise((resolve, reject) => {
    database
      .ref(`rides/${group}/${userId}`)
      .push({ ride, profile })
      .then(resolve)
      .catch(reject)
  })
}

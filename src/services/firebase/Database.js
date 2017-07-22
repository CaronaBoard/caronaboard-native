import Firebase from 'firebase'
import _ from 'lodash'

const config = {
  apiKey: 'AIzaSyDfwHLwWKTqduazsf4kjbstJEA2E1sCeoI',
  authDomain: 'caronaboard-61f75.firebaseapp.com',
  databaseURL: 'https://caronaboard-61f75.firebaseio.com',
  storageBucket: 'caronaboard-61f75.appspot.com',
  messagingSenderId: '617045704123'
}

const rideGroup = 'twpoa'

type rideOfferType = {
  origin: string,
  destination: string,
  days: string,
  hour: string
}

(() => {
  Firebase.initializeApp(config)
})()

const toArrayOfRides = (firebaseResponse) => {
  return _.flatMap(firebaseResponse.val(), (value, driverId) => {
    const ridesIds = Object.keys(value)
    const rides = Object.values(value)

    rides.forEach((ride, index) => {
      ride.driverId = driverId
      ride.rideId = ridesIds[index]
    })

    return rides
  })
}

export const getAllRides = () => {
  return new Promise(resolve => {
    Firebase.database()
      .ref('rides')
      .child(rideGroup)
      .once('value')
      .then(snapshot => resolve(toArrayOfRides(snapshot)))
  })
}

export const saveRideOffer = (rideOffer: rideOfferType) => {
  const userId = 's29iF96rLqRIj1O9WZ2p2BjR59J3' // firebase.auth().currentUser.uid

  const profile = {
    name: 'TEST',
    contact: {
      kind: 'Whatsapp',
      value: '5566778899'
    }
  } // firebase.database().ref(`profiles/${userId}`).once("value")

  return new Promise(resolve =>
    Firebase.database()
      .ref(`rides/${rideGroup}/${userId}`)
      .push({rideOffer, profile})
      .then(resolve)
  )
}

export const saveRideRequest = (rideId) => {
  const profile = {
    name: 'TEST',
    contact: {
      kind: 'Whatsapp',
      value: '5566778899'
    }
  } // firebase.database().ref(`profiles/${userId}`).once("value")

  return new Promise(resolve => {
    Firebase.database()
      .ref(`rideRequests/${rideId}`)
      .push({profile})
      .then(resolve)
  })
}

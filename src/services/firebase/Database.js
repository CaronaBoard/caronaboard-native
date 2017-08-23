import Firebase from 'firebase'
import { toArrayOfRides } from './Conversion'
import _ from 'lodash'
const rideGroup = 'twpoa'

type rideOfferType = {
  origin: string,
  destination: string,
  days: string,
  hour: string
}

export const getAllRides = () => {
  return new Promise(resolve => {
    Firebase.database()
      .ref('rides')
      .child(rideGroup)
      .once('value')
      .then(snapshot => resolve(toArrayOfRides(snapshot.val())))
  })
}

export const saveRideOffer = (rideOffer: rideOfferType) => {
  const userId = Firebase.auth().currentUser.uid

  Firebase.database()
    .ref(`profiles/${userId}`)
    .once('value')
    .then(snapshot => {
      const profile = snapshot.val()
      return new Promise(resolve => {
        Firebase.database()
          .ref(`rides/${rideGroup}/${userId}`)
          .push(Object.assign({ profile: profile }, rideOffer))
          .then(resolve)
      })
    })
}

export const updateRideOffer = (rideOffer: rideOfferType) => {
  const userId = Firebase.auth().currentUser.uid

  return Firebase.database()
    .ref(`profiles/${userId}`)
    .once('value')
    .then(snapshot => {
      const profile = snapshot.val()
      return new Promise(resolve => {
        let pathsToUpdate = {}
        pathsToUpdate[`rides/${rideGroup}/${userId}/${rideOffer.id}`] = Object.assign({profile: profile}, _.omit(rideOffer, 'id'))

        return Firebase.database()
          .ref()
          .update(pathsToUpdate)
          .then(() => resolve(rideOffer))
      })
    })
}

export const removeRideOffer = (rideId) => {
  const userId = Firebase.auth().currentUser.uid
  return Firebase.database()
    .ref(`profiles/${userId}`)
    .once('value')
    .then(snapshot => {
      return new Promise(resolve => {
        return Firebase.database()
          .ref(`rides/${rideGroup}/${userId}/${rideId}`)
          .remove()
          .then(() => resolve())
      })
    })
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

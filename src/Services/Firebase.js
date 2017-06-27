import Firebase from 'firebase'
import FirebaseConfig from '../Config/Firebase'

let database

try {
  FirebaseConfig.setup()
  database = Firebase.database().ref()
} catch (exception) {
  console.error(exception)
}

export function getAllRides () {
  return new Promise(resolve => {
    database.child('rides').once('value').then(
      (snapshot) => resolve(Object.values(snapshot.val()))
    )
  })
}

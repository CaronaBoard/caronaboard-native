import RidesResponse from './Fixtures/FirebaseRidesResponse.json'

jest.genMockFromModule('firebase')

const mockedResponse = { val: () => RidesResponse }

const databaseMock = {
  child: () => {
    return {
      once: () => {
        return new Promise(resolve => {
          process.nextTick(
            () => resolve(mockedResponse)
          )
        })
      }
    }
  }
}

const signInMock = () => {
  return new Promise(resolve => {
    process.nextTick(
      () => resolve({uid: '101'})
    )
  })
}

export default {
  initializeApp: jest.fn(),
  database: () => {
    return {
      ref: () => databaseMock
    }
  },
  auth: () => {
    return {
      signInWithEmailAndPassword: signInMock
    }
  }
}

import RidesResponse from './Fixtures/FirebaseRidesResponse.json'

// jest.genMockFromModule('firebase')

export const databaseModuleMock = {
  ref: () => {
    return {
      child: () => {
        return {
          once: () => Promise.resolve({ val: () => RidesResponse })
        }
      }
    }
  }
}

export const authModuleMock = {
  signInWithEmailAndPassword: () => Promise.resolve({ uid: '101' })
}

export default {
  initializeApp: jest.fn(),
  database: () => databaseModuleMock,
  auth: () => authModuleMock
}

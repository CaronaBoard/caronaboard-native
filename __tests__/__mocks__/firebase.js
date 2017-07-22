import RidesResponse from './Fixtures/FirebaseRidesResponse.json'

jest.genMockFromModule('firebase')

let mockFirebaseResponse = {
  sendEmailVerification: jest.fn(() => Promise.resolve()),
  uid: '-KndyvnnlSN05mJxL57Q',
  emailVerified: true,
  email: 'teste@email.io',
  phoneNumber: '988887777'
}

export const databaseModuleMock = {
  ref: () => {
    return {
      child: () => {
        return {
          once: () => Promise.resolve({val: () => RidesResponse})
        }
      }
    }
  }
}

const authenticationMock = {
  signInWithEmailAndPassword: () => Promise.resolve(mockFirebaseResponse),
  fetchProvidersForEmail: jest.fn()
}

export default {
  initializeApp: jest.fn(),
  database: () => databaseModuleMock,
  auth: () => authenticationMock
}

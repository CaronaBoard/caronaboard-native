import { firebaseUserFixture } from '../fixtures/firebase'

export const mockCreateUser = jest.fn(() => Promise.resolve(firebaseUserFixture))
export const mockSignInUser = jest.fn(() => Promise.resolve(firebaseUserFixture))

export const authMock = {
  signInWithEmailAndPassword: mockSignInUser,
  createUserWithEmailAndPassword: mockCreateUser,
  signOut: jest.fn(),
  fetchProvidersForEmail: jest.fn(),
  currentUser: { uid: '12345' },
  setPersistence: jest.fn()
}

export const mockUpdate = jest.fn(() => Promise.resolve())
export const databaseMock = {
  ref: jest.fn(() => ({
    update: mockUpdate,
    child: () => ({
      once: () => Promise.resolve({ val: jest.fn() })
    })
  }))
}

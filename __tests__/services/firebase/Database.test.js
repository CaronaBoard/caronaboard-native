import { getAllRides, saveRideOffer } from '../../../src/services/firebase'
import RidesResponse from '../../__mocks__/Fixtures/FirebaseRidesResponse.json'

const mockDatabase = {
  child: () => ({
    once: () => Promise.resolve({ val: () => RidesResponse })
  })
}

jest.mock('firebase', () => ({
  initializeApp: jest.fn(),
  database: () => ({
    ref: () => mockDatabase
  })
}))

describe('Firebase database service', () => {
  it.only('Should provide all rides as an array of rides', async () => {
    const rides = await getAllRides()

    const expectedRide = {
      driverId: 'AIYmwTmrdTfUuGeuoNF0SYgXJ1j1',
      rideId: '-KndyvnnlSN05mJxL57Q',
      origin: 'PUC',
      destination: 'Bomfim',
      days: 'Seg-Sex',
      hours: '19h',
      profile: {
        name: 'Eduardo Moroni',
        contact: {
          kind: 'Whatsapp',
          value: '+5559999999'
        }
      }
    }

    expect(rides).toHaveLength(3)
    expect(rides[0]).toEqual(expectedRide)
    expect(rides[1].destination).toBe('Centro')
    expect(rides[2].destination).toBe('Viamao')
  })

  it('Should save a ride into firebase', async () => {
    const rideOffer = {
      origin: 'origin',
      destination: 'destination',
      days: 'days',
      hour: 'hours',
      profile: {
        name: 'name',
        contact: {
          kind: 'kind',
          value: 'value'
        }
      }
    }

    const savedRide = await saveRideOffer()
    console.log('We need to test this', rideOffer, savedRide)
  })
}, 'Understand how to test third-party module with async behaviour')
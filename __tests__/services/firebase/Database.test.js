import { getAllRides, saveRideOffer, saveRideRequest } from '../../../src/services/firebase'
import RidesResponse from '../../__mocks__/Fixtures/FirebaseRidesResponse.json'

const mockRef = {
  remove: jest.fn(() => Promise.resolve(true)),
  push: jest.fn((ride) => Promise.resolve(ride)),
  child: () => ({
    once: () => Promise.resolve({ val: () => RidesResponse })
  })
}

const mockDatabase = {
  ref: jest.fn(() => mockRef)
}

jest.mock('firebase', () => ({
  initializeApp: jest.fn(),
  database: jest.fn(() => mockDatabase)
}))

describe('Firebase database service', () => {
  const rideId = 'RIDE_ID'
  const rideGroup = 'twpoa'
  const userId = 's29iF96rLqRIj1O9WZ2p2BjR59J3'
  const userProfile = {
    name: 'TEST',
    contact: {
      kind: 'Whatsapp',
      value: '5566778899'
    }
  }

  it('Should provide all rides as an array of rides', async () => {
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
    expect(rides[1].rideId).toBe('-Kne1M8qIcxjCHDuqohc')
    expect(rides[2].rideId).toBe('-Kne1QgaFLZf7Ai5HGWu')
  })

  it('Should save a ride offer into firebase', async () => {
    const rideOffer = {
      origin: 'origin',
      destination: 'destination',
      days: 'days',
      hour: 'hours'
    }

    await saveRideOffer(rideOffer)
    expect(mockDatabase.ref).toHaveBeenCalledWith(`rides/${rideGroup}/${userId}`)
    expect(mockRef.push).toHaveBeenCalledWith({ rideOffer, profile: userProfile })
  })

  it('Should save a ride request', async () => {
    await saveRideRequest(rideId)
    expect(mockDatabase.ref).toHaveBeenCalledWith(`rideRequests/${rideId}`)
    expect(mockRef.push).toHaveBeenCalledWith({profile: userProfile})
  })
})

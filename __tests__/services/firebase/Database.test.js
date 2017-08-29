import { getAllRides, getAllRideRequests, saveRideOffer, saveRideRequest, updateRideOffer, removeRideOffer } from '../../../src/services/firebase'
import RidesResponse from '../../__mocks__/Fixtures/FirebaseRidesResponse.json'
import ProfileResponse from '../../__mocks__/Fixtures/FirebaseProfileResponse.json'

const mockRef = {
  remove: jest.fn(() => Promise.resolve()),
  update: jest.fn(() => Promise.resolve()),
  push: jest.fn(() => Promise.resolve()),
  child: () => ({
    once: () => Promise.resolve({ val: () => RidesResponse })
  }),
  once: () => Promise.resolve({ val: () => ProfileResponse })
}

const mockDatabase = {
  ref: jest.fn(() => mockRef)
}

jest.mock('firebase', () => ({
  initializeApp: jest.fn(),
  database: jest.fn(() => mockDatabase),
  auth: () => ({
    currentUser: { uid: 's29iF96rLqRIj1O9WZ2p2BjR59J3' }
  })
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

  it('Should provide all ride requests as an array of rides', async () => {
    const rides = await getAllRideRequests()

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
    expect(mockRef.push).toHaveBeenCalledWith(Object.assign({profile: userProfile}, rideOffer))
  })

  it('Should update a ride', async () => {
    const rideOffer = {
      id: 12345,
      origin: 'origin',
      destination: 'destination',
      days: 'days',
      hour: 'hours'
    }

    const updatedRide = await updateRideOffer(rideOffer)
    expect(mockDatabase.ref).toHaveBeenCalledWith(`profiles/${userId}`)
    expect(updatedRide.origin).toBe('origin')
    expect(updatedRide.destination).toBe('destination')
    expect(updatedRide.days).toBe('days')
    expect(updatedRide.hour).toBe('hours')
  })

  it('Should remove a ride offer', async () => {
    await removeRideOffer(rideId)
    expect(mockDatabase.ref).toHaveBeenCalledWith(`rides/${rideGroup}/${userId}/${rideId}`)
  })

  it('Should save a ride request', async () => {
    await saveRideRequest(rideId)
    expect(mockDatabase.ref).toHaveBeenCalledWith(`ridesRequests/${rideGroup}/${rideId}`)
    expect(mockRef.push).toHaveBeenCalledWith({profile: userProfile})
  })
})

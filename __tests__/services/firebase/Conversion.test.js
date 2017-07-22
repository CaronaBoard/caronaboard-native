import { toArrayOfRides } from '../../../src/services/firebase/Conversion'
import FirebaseResponse from '../../__mocks__/Fixtures/FirebaseRidesResponse.json'

describe('Firebase conversions', () => {
  it('Should convert firebase response into an array of rides', () => {
    const ridesArray = toArrayOfRides(FirebaseResponse)

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

    expect(ridesArray).toHaveLength(3)
    expect(ridesArray[0]).toEqual(expectedRide)
    expect(ridesArray[1].rideId).toBe('-Kne1M8qIcxjCHDuqohc')
    expect(ridesArray[2].rideId).toBe('-Kne1QgaFLZf7Ai5HGWu')
  })
})

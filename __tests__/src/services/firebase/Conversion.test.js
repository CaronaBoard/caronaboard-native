import { toArrayOfRides } from '../../../../src/services/firebase/Conversion'
import FirebaseResponse from '../../../resources/fixtures/firebase/FirebaseRidesResponse.json'
import { rideOfferFixture } from '../../../resources/fixtures/ride/offer'

describe('Firebase conversions', () => {
  it('Should convert firebase response into an array of rides', () => {
    const ridesArray = toArrayOfRides(FirebaseResponse)

    expect(ridesArray).toHaveLength(3)
    expect(ridesArray[0]).toEqual(rideOfferFixture)
    expect(ridesArray[1].rideId).toBe('-Kne1M8qIcxjCHDuqohc')
    expect(ridesArray[2].rideId).toBe('-Kne1QgaFLZf7Ai5HGWu')
  })
})

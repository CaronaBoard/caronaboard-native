import { toArrayOfRides, toGroupsArray } from '../../../../src/services/firebase/Conversion'
import FirebaseResponse from '../../../resources/fixtures/firebase/FirebaseRidesResponse.json'
import { rideOfferFixture } from '../../../resources/fixtures/ride/offer'
import { caronaGroups } from '../../../resources/fixtures/groups'

describe('Firebase conversions', () => {
  it('Should convert firebase response into an array of rides', () => {
    const ridesArray = toArrayOfRides(FirebaseResponse)

    expect(ridesArray).toHaveLength(3)
    expect(ridesArray[0]).toEqual(rideOfferFixture)
    expect(ridesArray[1].rideId).toBe('-Kne1M8qIcxjCHDuqohc')
    expect(ridesArray[2].rideId).toBe('-Kne1QgaFLZf7Ai5HGWu')
  })

  it('Should flatmap firebase groups', () => {
    const groupsArray = toGroupsArray(caronaGroups)
    const expectedMapping = {
      members: {QdQZ1wadFxdXUzoFjzFKM7guTZf2: {admin: true}},
      name: 'ThoughtWorks BH',
      id: 'twbh'
    }

    expect(groupsArray).toHaveLength(2)
    expect(groupsArray[0]).toEqual(expectedMapping)
  })
})

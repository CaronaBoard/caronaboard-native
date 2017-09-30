import { fetchAllRideOffers } from '../../../../../src/redux/actions/index'
import * as FirebaseService from '../../../../../src/services/firebase/index'
import { updateRideOffers } from '../../../../../src/redux/actions/sync/RideOfferActions'
import { rideOfferFixture } from '../../../../resources/fixtures/ride/offer'
jest.mock('../../../../../src/services/firebase')

describe('RideOffer async actions', () => {
  const dispatchMock = jest.fn()

  it('Should create a thunk for fetching all rides', async () => {
    FirebaseService.getAllRideOffers = jest.fn(() => rideOfferFixture)

    const expectedAction = updateRideOffers(rideOfferFixture)
    const thunk = fetchAllRideOffers()
    await thunk(dispatchMock)

    expect(dispatchMock).toHaveBeenCalledWith(expectedAction)
  })
})

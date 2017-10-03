import { rideOfferFixture } from '../../../../resources/fixtures/ride/offer'
import { fetchAllRideOffers, fetchYourRideOffers } from '../../../../../src/redux/actions'
import { updateRideOffers, updateYourRideOffers } from '../../../../../src/redux/actions/sync/RideOfferActions'
import * as FirebaseService from '../../../../../src/services/firebase'
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

  it('Should create a thunk for fetching your ride offers', async () => {
    FirebaseService.getUserRideOffers = jest.fn(() => rideOfferFixture)

    const expectedAction = updateYourRideOffers(rideOfferFixture)
    const thunk = fetchYourRideOffers('uid')
    await thunk(dispatchMock)

    expect(dispatchMock).toHaveBeenCalledWith(expectedAction)
  })
})

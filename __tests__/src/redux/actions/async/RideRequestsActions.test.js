import { fetchAllRideRequests } from '../../../../../src/redux/actions/index'
import { updateRideRequests } from '../../../../../src/redux/actions/sync/RideRequestActions'
import * as FirebaseService from '../../../../../src/services/firebase/index'
import { rideRequestFixture } from '../../../../resources/fixtures/ride/request'
jest.mock('../../../../../src/services/firebase')

describe('RideRequest async actions', () => {
  const dispatchMock = jest.fn()

  it('Should create a thunk for fetching all ride requests', async () => {
    FirebaseService.getAllRideRequests = jest.fn(() => rideRequestFixture)

    const expectedAction = updateRideRequests(rideRequestFixture)
    const thunk = fetchAllRideRequests()
    await thunk(dispatchMock)

    expect(dispatchMock).toHaveBeenCalledWith(expectedAction)
  })
})

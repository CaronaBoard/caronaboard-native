import { FETCH_ALL_RIDES } from '../Types'
import { getAllRides } from '../../Services/Firebase'

export function fetchAllRides () {
  return async (dispatch) => {
    const rides = await getAllRides()
    const action = {
      type: FETCH_ALL_RIDES,
      payload: rides
    }
    dispatch(action)
  }
}

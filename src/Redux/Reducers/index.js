import { combineReducers } from 'redux'
import TestReducers from './TestReducers'
import RideOfferReducers from './RideOfferReducers'

const rootReducer = combineReducers({
  test: TestReducers,
  rideOffer: RideOfferReducers
})

export default rootReducer

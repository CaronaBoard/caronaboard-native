import { combineReducers } from 'redux'
import TestReducers from './TestReducers'
import RideOfferReducers from './RideOfferReducers'
import AuthReducers from './AuthReducers'

const rootReducer = combineReducers({
  test: TestReducers,
  rideOffer: RideOfferReducers,
  auth: AuthReducers
})

export default rootReducer

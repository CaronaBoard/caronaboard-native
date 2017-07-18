import { combineReducers } from 'redux'
import RideOfferReducers from './RideOfferReducers'
import AuthReducers from './AuthReducers'

export const rootReducer = combineReducers({
  rideOffer: RideOfferReducers,
  auth: AuthReducers
})

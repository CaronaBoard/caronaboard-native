import { combineReducers } from 'redux'
import RideOfferReducers from './RideOfferReducers'
import AuthReducers from './AuthReducers'

const reducers = {
  rideOffer: RideOfferReducers,
  auth: AuthReducers
}

export const rootReducer = combineReducers(reducers)

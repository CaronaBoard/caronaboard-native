import { combineReducers } from 'redux'
import RideOfferReducers from './RideOfferReducers'
import AuthReducers from './AuthReducers'

const rootReducer = combineReducers({
  rideOffer: RideOfferReducers,
  auth: AuthReducers
})

export default rootReducer

import { combineReducers } from 'redux'
import RideReducers from './RideReducers'
import AuthReducers from './AuthReducers'

const reducers = {
  ride: RideReducers,
  auth: AuthReducers
}

export const rootReducer = combineReducers(reducers)

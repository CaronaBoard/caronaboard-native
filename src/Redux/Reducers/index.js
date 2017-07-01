import { combineReducers } from 'redux'
import TestReducers from './TestReducers'

const rootReducer = combineReducers({
  test: TestReducers
})

export default rootReducer

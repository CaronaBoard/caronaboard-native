import { applyMiddleware, createStore as create } from 'redux'
import RootReducer from '../Redux/Reducers'
import thunk from 'redux-thunk'

const initialState = {}

export default {
  createStore: () => {
    const store = create(RootReducer, initialState, applyMiddleware(thunk))
    return store
  }
}

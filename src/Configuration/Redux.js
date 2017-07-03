import { createStore as create } from 'redux'
import RootReducer from '../Redux/Reducers'

const initialState = {}

export default {
  createStore: () => create(RootReducer, initialState)
}

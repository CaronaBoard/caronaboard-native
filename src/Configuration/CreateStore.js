import { createStore } from 'redux'
import RootReducer from '../Redux/Reducers'

const initialState = {}

export function configureStore () {
  const store = createStore(RootReducer, initialState)
  return store
}

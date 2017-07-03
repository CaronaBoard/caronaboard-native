import { createStore as create } from 'redux'
import RootReducer from '../Redux/Reducers'

const initialState = {}

export const createStore = () => create(RootReducer, initialState)

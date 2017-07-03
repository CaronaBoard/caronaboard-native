import { TEST } from '../Types'

export const INITIAL_STATE = {
  counter: 0
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TEST:
      return { counter: state.counter + 1 }
    default:
      return state
  }
}

import { FOR_SALE } from '../Actions/types'

const INITIAL_STATE = {
  fishForSale: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FOR_SALE:
      return { ...state, fishForSale: action.payload }
    default:
      return state
  }
}

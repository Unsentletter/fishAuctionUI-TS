import { FOR_SALE } from '../Actions/types'

const INITIAL_STATE = {
  fishForSale: '',
}

export default (state = INITIAL_STATE, action) => {
  console.log(action.type)
  console.log(action.payload)
  switch (action.type) {
    case FOR_SALE:
      console.log(action.payload)
      return { ...state, fishForSale: action.payload }
    default:
      return state
  }
}

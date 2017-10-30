import { ALL_COMICS_REQUEST, ALL_COMICS_SUCCESS } from '../constants/actions'

const initialState = {
	results: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ALL_COMICS_REQUEST:
      return state
    case ALL_COMICS_SUCCESS:
      return action.data
    default:
      return state
  }
}

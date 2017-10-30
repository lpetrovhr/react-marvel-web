import { ALL_HEROES_REQUEST, ALL_HEROES_SUCCESS } from '../constants/actions'

const initialState = {
	results: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ALL_HEROES_REQUEST:
      return state
    case ALL_HEROES_SUCCESS:
      return action.data
    default:
      return state
  }
}

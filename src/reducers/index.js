import { reducer as form } from 'redux-form'
import { combineReducers } from 'redux'

import heroes from './heroes'
import comics from './comics'

const appReducer = combineReducers({
  heroes,
  comics
})

export default appReducer

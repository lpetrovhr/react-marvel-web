import { ALL_HEROES_REQUEST, ALL_HEROES_SUCCESS, 
  SINGLE_HEROE_REQUEST, SINGLE_HEROE_SUCCESS } from 'constants/actions'
import api from 'utils/api'
import store from 'store'

export const heroesSuccess = data => ({
  type: ALL_HEROES_SUCCESS,
  data
})

export const fetchHeroes = (string) => 
    dispatch => 
      api.get(`characters?${string}`)
        .then(data => {
          dispatch(heroesSuccess(data))
        })

// export const fetchSingleHeroe = (string) =>
//   dispatch =>
//     api.get()
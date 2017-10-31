import { ALL_HEROES_SUCCESS } from 'constants/actions'
import api from 'utils/api'
import store from 'store'

export const heroesSuccess = data => ({
  type: ALL_HEROES_SUCCESS,
  data
})

export const fetchHeroes = () => 
    dispatch => 
      api.get('characters', 'marvel')
        .then(data => {
          dispatch(heroesSuccess(data))
        })

export const fetchSingleHero = id =>
	dispatch =>
		api.get(`characters/${id}`, 'marvel')
		  .then(data => {
			  dispatch(heroesSuccess(data))
		  })

export const fetchComicHeroes = id =>
	dispatch =>
		api.get(`comics/${id}/characters`, 'marvel')
			.then(data => {
				dispatch(heroesSuccess(data))
			})

export const fetchSearchForHero = (startsWith, cb = null) =>
	dispatch =>
		api.get(`characters?nameStartsWith=${startsWith}`)
			.then(data => {
				dispatch(heroesSuccess(data))
				if (typeof cb === 'function') cb()
			})
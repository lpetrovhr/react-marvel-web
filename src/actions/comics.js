import { ALL_COMICS_SUCCESS } from 'constants/actions'
import api from 'utils/api'
import store from 'store'

export const comicsSuccess = data => ({
  type: ALL_COMICS_SUCCESS,
  data
})

export const fetchComics = () => 
    dispatch => 
      api.get('comics', 'marvel')
        .then(data => {
          dispatch(comicsSuccess(data))
        })

export const fetchSingleComic = id =>
	dispatch =>
		api.get(`comics/${id}`, 'marvel')
			.then(data => {
				dispatch(comicsSuccess(data))
			})

export const fetchHeroComics = id =>
	dispatch =>
		api.get(`characters/${id}/comics`, 'marvel')
			.then(data => {
				dispatch(comicsSuccess(data))
			})

export const fetchSearchForComic = (startsWith, cb = null) =>
	dispatch =>
		api.get(`comics?titleStartsWith=${startsWith}`)
			.then(data => {
				dispatch(heroesSuccess(data))
				if (typeof cb === 'function') cb()
			})
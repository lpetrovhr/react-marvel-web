import { ALL_COMICS_REQUEST, ALL_COMICS_SUCCESS, 
  SINGLE_COMIC_REQUEST, SINGLE_COMIC_SUCCESS } from 'constants/actions'
import api from 'utils/api'
import store from 'store'

export const comicsSuccess = data => ({
  type: ALL_COMICS_SUCCESS,
  data
})

export const fetchComics = (string) => 
    dispatch => 
      api.get(`comics?${string}`)
        .then(data => {
          dispatch(comicsSuccess(data))
        })

// export const fetchSingleHeroe = (string) =>
//   dispatch =>
//     api.get()
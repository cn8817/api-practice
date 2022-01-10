import axios from "axios"

export const GET_FILMS_ACTION = 'GET_FILMS_ACTION'
export const GET_FILMS_SUCCESS = 'GET_FILMS_SUCCESS'
export const GET_FILMS_ERROR = 'GET_FILMS_ERROR'

export const GET_FILMS_ID_ACTION = 'GET_FILMS_ID_ACTION'
export const GET_FILMS_ID_SUCCESS = 'GET_FILMS_ID_SUCCESS'
export const GET_FILMS_ID_ERROR = 'GET_FILMS_ID_ERROR'

export const getFilms = () => dispatch => {
    dispatch({type: GET_FILMS_ACTION})
    axios
        .get('https://ghibliapi.herokuapp.com/films')
        .then(res => {
            dispatch({type: GET_FILMS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: GET_FILMS_ERROR, payload: err})
        })
}

export const getFilmsId = (id) => dispatch => {
    dispatch({type: GET_FILMS_ID_ACTION})
    axios
        .get(`https://ghibliapi.herokuapp.com/films/${id}`)
        .then(res => {
            dispatch({type: GET_FILMS_ID_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: GET_FILMS_ID_ERROR, payload: err})
        })
}
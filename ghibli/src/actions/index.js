import axios from "axios"

export const GET_FILMS_ACTION = 'GET_FILMS_ACTION'
export const GET_FILMS_SUCCESS = 'GET_FILMS_SUCCESS'
export const GET_FILMS_ERROR = 'GET_FILMS_ERROR'

export const GET_FILMS_ID_ACTION = 'GET_FILMS_ID_ACTION'
export const GET_FILMS_ID_SUCCESS = 'GET_FILMS_ID_SUCCESS'
export const GET_FILMS_ID_ERROR = 'GET_FILMS_ID_ERROR'

export const GET_CHARACTERS_ACTION = 'GET_CHARACTERS_ACTION'
export const GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS'
export const GET_CHARACTERS_ERROR = 'GET_CHARACTERS_ERROR'

export const GET_CHARACTERS_ID_ACTION = 'GET_CHARACTERS_ID_ACTION'
export const GET_CHARACTERS_ID_SUCCESS = 'GET_CHARACTERS_ID_SUCCESS'
export const GET_CHARACTERS_ID_ERROR = 'GET_CHARACTERS_ID_ERROR'

export const GET_LOCATIONS_ACTION = 'GET_LOCATIONS_ACTION'
export const GET_LOCATIONS_SUCCESS = 'GET_LOCATIONS_SUCCESS'
export const GET_LOCATIONS_ERROR = 'GET_LOCATIONS_ERROR'

export const GET_SPECIES_ACTION = 'GET_SPECIES_ACTION'
export const GET_SPECIES_SUCCESS = 'GET_SPECIES_SUCCESS'
export const GET_SPECIES_ERROR = 'GET_SPECIES_ERROR'

export const GET_VEHICLES_ACTION = 'GET_VEHICLES_ACTION'
export const GET_VEHICLES_SUCCESS = 'GET_VEHICLES_SUCCESS'
export const GET_VEHICLES_ERROR = 'GET_VEHICLES_ERROR'

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

export const getCharacters = () => dispatch => {
    dispatch({type: GET_CHARACTERS_ACTION})
    axios
        .get('https://ghibliapi.herokuapp.com/people')
        .then(res => {
            dispatch({type: GET_CHARACTERS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: GET_CHARACTERS_ERROR, payload: err})
        })
}

export const getLocations = () => dispatch => {
    dispatch({type: GET_LOCATIONS_ACTION})
    axios
        .get('https://ghibliapi.herokuapp.com/locations')
        .then(res => {
            dispatch({type: GET_LOCATIONS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: GET_LOCATIONS_ERROR, payload: err})
        })
}

export const getSpecies = () => dispatch => {
    dispatch({type: GET_SPECIES_ACTION})
    axios
        .get('https://ghibliapi.herokuapp.com/species')
        .then(res => {
            dispatch({type: GET_SPECIES_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: GET_SPECIES_ERROR, payload: err})
        })
}

export const getVehicles = () => dispatch => {
    dispatch({type: GET_VEHICLES_ACTION})
    axios
        .get('https://ghibliapi.herokuapp.com/vehicles')
        .then(res => {
            dispatch({type: GET_VEHICLES_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: GET_VEHICLES_ERROR, payload: err})
        })
}
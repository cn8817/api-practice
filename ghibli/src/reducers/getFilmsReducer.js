import { GET_FILMS_SUCCESS, GET_FILMS_ACTION } from "../actions";

const initialState = {
    films:[
        {
            id: '',
            title: '',
            image: '',
        }
    ],
    isFetching: false
}

const getFilmsReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_FILMS_ACTION:
            return({
                ...state,
                isFetching: true
            })
        case GET_FILMS_SUCCESS:
            return({
                ...state,
                films: action.payload,
                isFetching: false
            })
        default:
            return state
    }
}

export default getFilmsReducer
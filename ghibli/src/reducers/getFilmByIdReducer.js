import { GET_FILMS_ID_SUCCESS, GET_FILMS_ID_ACTION, GET_FILMS_ACTION } from "../actions";

const initialState = {
    film:[
        {
            id: '',
            title: '',
            original_title: '',
            original_title_romanised: '',
            image: '',
            release_date: '',
            description: ''
        }
    ],
    isFetching: false
}

const getFilmByIdReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_FILMS_ACTION:
            return({
                ...state,
                isFetching: true
            })
        case GET_FILMS_ID_SUCCESS:
            return({
                ...state,
                film: action.payload,
                isFetching:false
            })
        default:
            return state
    }
}

export default getFilmByIdReducer
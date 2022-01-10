import { GET_FILMS_ID_SUCCESS } from "../actions";

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
    ]
}

const getFilmByIdReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_FILMS_ID_SUCCESS:
            return({
                ...state,
                film: action.payload
            })
        default:
            return state
    }
}

export default getFilmByIdReducer
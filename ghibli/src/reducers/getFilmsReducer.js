import { GET_FILMS_SUCCESS } from "../actions";

const initialState = {
    films:[
        {
            id: '',
            title: '',
            image: '',
        }
    ]
}

const getFilmsReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_FILMS_SUCCESS:
            return({
                ...state,
                films: action.payload
            })
        default:
            return state
    }
}

export default getFilmsReducer
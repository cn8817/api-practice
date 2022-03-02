import { GET_CHARACTERS_SUCCESS, GET_CHARACTERS_ACTION } from "../actions";

const initialState = {
    characters:[
        {
            id: '',
            name: '',
            alt: '',
            image: '',
        }
    ],
    isFetching: false
}

const getCharactersReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_CHARACTERS_ACTION:
            return({
                ...state,
                isFetching: true
            })
        case GET_CHARACTERS_SUCCESS:
            return({
                ...state,
                characters: action.payload,
                isFetching: false
            })
        default:
            return state
    }
}

export default getCharactersReducer
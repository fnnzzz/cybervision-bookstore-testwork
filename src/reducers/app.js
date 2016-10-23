import { GET_ALL_DATA, GET_AUTHOR_DETAILS } from 'constants/actionTypes'


const initState = {
    books: null,
    authors: null,
    genres: null,
    authorDetails: null
};

export default function checkApp(state = initState, action) {
    switch(action.type){

        case `${GET_ALL_DATA}_FULFILLED`:
            return {
                ...state,
                ...action.payload
            }

        case `${GET_ALL_DATA}_REJECTED`:
            return {
                ...state,
                books: false,
                authors: false,
                genres: false
            }

        case `${GET_AUTHOR_DETAILS}_FULFILLED`:
            return {
                ...state,
                authorDetails: {
                    ...action.payload
                }
            }

        case `${GET_AUTHOR_DETAILS}_REJECTED`:
            return {
                ...state,
                authorDetails: false
            }

        case `${GET_AUTHOR_DETAILS}_CLEAR`:
            return {
                ...state,
                authorDetails: null
            }

        default:
            return state;

    }
}
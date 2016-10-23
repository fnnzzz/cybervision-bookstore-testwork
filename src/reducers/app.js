import { GET_ALL_DATA } from 'constants/actionTypes'


const initState = {
    books: null,
    authors: null,
    genres: null
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

        default:
            return state;

    }
}
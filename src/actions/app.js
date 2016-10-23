import { GET_ALL_DATA, GET_AUTHOR_DETAILS } from 'constants/actionTypes'
import { getAllDataRoute, getAuthorDetailsRoute } from 'constants/routes'

export function getAllData() {
	return (dispatch) => {
		dispatch({
			type: GET_ALL_DATA,
			payload: fetch(getAllDataRoute())
						.then(response => {
							if( response.ok ) {
								return response.json()
							}
							else {
								return Promise.reject();
							}
						})
						.then(json => {
							return Promise.resolve(json)
						})
		})
	};
}

export function getAuthorDetails(authorId = null) {
	return (dispatch) => {
		dispatch({
			type: GET_AUTHOR_DETAILS,
			payload: fetch(getAuthorDetailsRoute(authorId))
						.then(response => {
							if( response.ok ) {
								return response.json()
							}
							else {
								return Promise.reject();
							}
						})
						.then(json => {
							return Promise.resolve(json)
						})
		})
	};
}

export function clearAuthorsDetails() {
	return {
		type: `${GET_AUTHOR_DETAILS}_CLEAR`
	}
}
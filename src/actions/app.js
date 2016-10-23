import { GET_ALL_DATA } from 'constants/actionTypes'
import { getAllDataRoute } from 'constants/routes'

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
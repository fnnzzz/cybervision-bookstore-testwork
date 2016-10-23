const url = 'http://localhost:3000';


export const getAllDataRoute = () => `${url}/all/`

export const getAuthorDetailsRoute = (authorId) => {
	return `${url}/author-details/${authorId}`
}
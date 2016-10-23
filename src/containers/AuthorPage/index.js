import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getAllData, getAuthorDetails, clearAuthorsDetails } from 'actions/app'


import AuthorDetailsPage from 'components/Author'

class AuthorDetailsPageContainer extends Component {
	render() {
		return (
			<AuthorDetailsPage {...this.props} />
		)
	}
}

function mapStateToProps(state) {
	return {
		books: state.app.books,
		authors: state.app.authors,
		genres: state.app.genres,
		authorDetails: state.app.authorDetails
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getAuthorDetails: bindActionCreators(getAuthorDetails, dispatch),
		clearAuthorsDetails: bindActionCreators(clearAuthorsDetails, dispatch),
		getAllData: bindActionCreators(getAllData, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorDetailsPageContainer)
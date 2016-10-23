import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import { getAllData } from 'actions/app'

import BooksPage from 'components/Books'



class BooksListContainer extends Component {
	render() {
		return (
			<BooksPage {...this.props} />
		)
	}
}

function mapStateToProps(state) {
	return {
		books: state.app.books,
		authors: state.app.authors,
		genres: state.app.genres,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getAllData: bindActionCreators(getAllData, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksListContainer)
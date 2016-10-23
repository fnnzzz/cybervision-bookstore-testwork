import React, { Component } from 'react'
import Helmet from 'react-helmet';
import { browserHistory } from 'react-router'
import LeftSidebar from 'components/LeftSidebar'
import BookItem from './BookItem'


class BooksListPage extends Component {

	componentWillMount() {
		this.props.getAllData();
	}

	render() {

		const genreId = this.context.location.query.genre;
		const authorId = this.context.location.query.author;

		const { books, authors, genres } = this.props;

		if ( books === null ) {
			return false;
		}

		if( books === false && authors === false && genres === false ) {
			browserHistory['push']('/turn-on-json-server');
			return false;
		}	

		let pageTitle;

		{ !genreId && !authorId ? pageTitle = "bookZ — все книги" : null }
		{ genreId ? pageTitle = `bookZ — книги по жанру "${genres[parseInt(genreId)].name}"` : null }
		{ authorId ? pageTitle = `bookZ — книги по автору "${authors[parseInt(authorId)].name}"` : null }

		return (
			<section class="flexcontainer -row">

				<Helmet title={pageTitle} />

				<LeftSidebar 
					authors={authors} 
					books={books}
					genres={genres}  
				/>

				<div class="bookslist__container">
					
					<h1 class="bookslist__title">
						{ !genreId && !authorId ? "Все книги:" : null }
						{ genreId ? `По жанру - "${genres[parseInt(genreId)].name}"` : null }
						{ authorId ? `По автору - "${authors[parseInt(authorId)].name}"` : null }
					</h1>

					<hr class="bookslist__separator" />

					<div class="bookslist__itemswrap">
						{
							Object.keys(books).map((item, index) => {

								if( genreId ) {
									if( books[item].genres.indexOf(parseInt(genreId)) === -1) {
										return false;
									}
								}

								if( authorId ) {
									if( books[item].authors.indexOf(parseInt(authorId)) === -1) {
										return false;
									}
								}

								return (
									<BookItem 
										key={index} 
										bookDetails={books[item]}
										authors={authors}
										genres={genres}
									/>
								)
							})
						}
					</div>


				</div>

			</section>
		)
	}
}

BooksListPage.contextTypes = {
	location: React.PropTypes.object
}

export default BooksListPage;
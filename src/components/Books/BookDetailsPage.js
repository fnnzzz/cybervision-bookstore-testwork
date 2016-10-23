import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import Helmet from 'react-helmet'


// material ui
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';	
import GoBackIcon from 'material-ui/svg-icons/navigation/arrow-back';


import "assets/styles/bookpage.scss"


class BookDetailsPage extends Component {

	componentWillMount() {

		// const bookId = this.context.routeParams.bookId;

		if( this.props.books === null ) {
			this.props.getAllData();
		}

		if( this.props.books === false && this.props.genres === false && this.props.authors === false ) {
			browserHistory['push']('/turn-on-json-server');
		}

		this.checkExistBook(this.props)
	}

	componentWillReceiveProps(props) {
		this.checkExistBook(props);
	}

	checkExistBook(props) {

		const bookId = this.context.routeParams.bookId;
		const { books } = props;

		if ( books === null ) { return false }

		if( !books[parseInt(bookId)] ) {
			browserHistory['push']('/404');
		}
	}

	render() {

		const LinkElem = (props) => {
			return (
				<span class="bookpage__rightwrap-link">
					<Link to={props.link}>{ props.title }</Link>
				</span>
			)
		}

		const { books, authors, genres } = this.props;

		if( books === null ) {
			return false;
		}

		const bookId = this.context.routeParams.bookId;
		const book = books[parseInt(bookId)];

		return (
			<div class="bookpage__container">

				<Helmet title={ `bookZ — "${book.name}" (${book.year}) ` } /> 

				<Paper className="bookpage__paper" zDepth={2}>
					
					<h1 class="bookpage__booktitle">
						<div class="bookpage__goback">
							<IconButton onClick={() => browserHistory['push']('/') }>
								<GoBackIcon color="#555" />
							</IconButton>
						</div>

						{ book.name }
					</h1>

					<section class="bookpage__flexwrap">

						<aside class="bookpage__leftwrap">
							<img 
								class="bookpage__leftwrap-pic" 
								src={ book.pic }
								alt={ book.name }
							/>
						</aside>

						<div class="bookpage__rightwrap">
							
							<p class="bookpage__rightwrap-item">Автор:
								{
									book.authors.map((author, index) => {
										return (
											<LinkElem 
												key={index} 
												link={`/author/${author}`} 
												title={ authors[author].name } 
											/>
										)
									})
								}
							</p>

							

							<p class="bookpage__rightwrap-item">Жанры:
								{
									book.genres.map((genre, index) => {
										return (
											<LinkElem 
												key={index} 
												link={`/?genre=${genre}`} 
												title={ genres[genre].name }
											/>
										)
									})
								}
							</p>

							<p class="bookpage__rightwrap-item">Год:
								{ " " } { book.year }
							</p>


							<p class="bookpage__rightwrap-description">
								{ book.descr }
							</p>

						</div>	

					</section>

				</Paper>
			</div>
		)
	}
}

BookDetailsPage.contextTypes = {
	location: React.PropTypes.object,
	routeParams: React.PropTypes.object
}

export default BookDetailsPage;
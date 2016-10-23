import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import Helmet from 'react-helmet'


import "assets/styles/authorpage.scss"

// material-ui
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';	
import Divider from 'material-ui/Divider';	
import GoBackIcon from 'material-ui/svg-icons/navigation/arrow-back';
import CircularProgress from 'material-ui/CircularProgress';

import _ from 'lodash';


import BookItem from 'components/Books/BookItem'

class AuthorDetailsPage extends Component {

	componentWillMount() {
		this.props.getAllData();
		this.props.getAuthorDetails(this.context.routeParams.authorId);
	}

	componentWillUnmount() {
		this.props.clearAuthorsDetails();	
	}

	render() {

		const { authorDetails, books, authors, genres } = this.props;

		if( authorDetails === null ) {
			return (
				<div style={{textAlign: 'center', margin: '100px auto' }}>
					<CircularProgress size={2} />
				</div>
			)
		}

		if( authorDetails === false ) {
			browserHistory['push']('/404');
		}

		return (
			<div class="authorpage__wrapper">
				<Paper className="authorpage__paper" zDepth={1}>

					<Helmet title={ `bookZ — ${authorDetails.name} ` } />
					
					<section class="authorpage__detailscontainer">
						<div class="authorpage__goback">
							<IconButton onClick={() => browserHistory['push']('/') }>
								<GoBackIcon color="#555" />
							</IconButton>
						</div>
						
						
						<div 
							class="authorpage__details-photo" 
							style={{ backgroundImage: `url(${authorDetails.photo})` }} 
						/>	
						
						<article class="authorpage__details-rightblock">
							<h1 class="authorpage__details-name">
								{ authorDetails.name }
							</h1>

							<h5 style={{ color: "#555", marginTop: "15px" }}>
								{ authorDetails.years }
							</h5>
						
							<p class="authorpage__details-descr">
								{ authorDetails.bio }
							</p>
						</article>
					</section>

					<Divider style={{ margin: '40px 0' }} />

					<section>
						<h2 class="authorpage__authorbooks-title">Книги этого автора:</h2>

						<div class="authorpage__authorbooks-container">
							{	
								books ?
									Object.keys(books).map((b, index) => {

										// search related book to author
										if( _.indexOf(books[b].authors, authorDetails.id) !== -1 ) {
											return (
												<BookItem 
													key={index} 
													bookDetails={books[b]}
													authors={authors}
													genres={genres}
												/>
											)
										}
									})
								: null
							}
						</div>



					</section>

				</Paper>
			</div>
		)
	}
}

AuthorDetailsPage.contextTypes = {
	location: React.PropTypes.object,
	routeParams: React.PropTypes.object
}

export default AuthorDetailsPage;
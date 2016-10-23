import React, { Component } from 'react'
import { Link } from 'react-router'



export default class BookItem extends Component {
	render() {

		const { bookDetails, authors, genres } = this.props; 

		return (
			<div class="bookslist__bookitem">

				<Link to={ `/book/${bookDetails.id}` }>
					<div 
						class="bookslist__bookitem-poster" 
						style={{ backgroundImage: `url(${bookDetails.pic})` }}
					/>
				</Link>
				
				<Link to={ `/book/${bookDetails.id}` }>
					<p class="bookslist__bookitem-title">{ bookDetails.name } </p>
				</Link>

				<p class="bookslist__bookitem-author">
					<span class="bookslist__bookitem-author-spanitem">
						{
							bookDetails.authors.map((author, index) => {
								return (
									<span key={index}>
										<Link to={ `/?author=${authors[author].id}` }>
											{ authors[author].name }
										</Link>
									</span>
								)
							})
						}
					</span>
					<span class="bookslist__bookitem-year">
						{ bookDetails.year }
					</span>

					<span class="bookslist__bookitem-genres">
						{
							bookDetails.genres.map((genre, index) => {
								return (
									<span key={index}>
										<Link to={ `/?genre=${genres[genre].id}` }>
											{ genres[genre].name }
										</Link>
									</span>
								)
							})
						}
					</span>
				</p>
			</div>
		)
	}
}
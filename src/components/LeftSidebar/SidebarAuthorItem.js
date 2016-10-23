import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import Divider from 'material-ui/Divider';


import _ from 'lodash';


export default class SidebarAuthorItem extends Component {

	constructor(props) {
		super(props);
		this.relatedBooks = []
	}

	componentWillMount() {
		this.findRelatedBooks();
	}

	componentWillReceiveProps() {
		this.findRelatedBooks();	
	}

	findRelatedBooks() {
		const { books, id } = this.props;

		Object.keys(books).map((b) => {

			// search related book to author
			// and push their id to array
			if( _.indexOf(books[b].authors, id) !== -1 ) {

				if( _.indexOf(this.relatedBooks, books[b].id) === -1 ) {
					this.relatedBooks.push(books[b].id);
				} 
			}
		})
	}

	render() {
		const { name, books, id } = this.props;

		return (
			<li>
				<IconMenu
					iconButtonElement={ <p>{name}</p> }
				>
					<MenuItem onClick={() => browserHistory['push'](`/author/${id}`) } primaryText="Об авторе" />
					<Divider />
					<MenuItem 
						primaryText="Книги этого автора"
						rightIcon={<ArrowDropRight />}
						menuItems={
							this.relatedBooks.map((o) => {
								return (
									<Link to={ `/book/${o}` }>
										<MenuItem primaryText={books[o].name} />
									</Link>
								)
							})
						}
					/>	
				</IconMenu>
			</li>
		)
	}
}
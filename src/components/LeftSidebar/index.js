import React, { Component } from 'react'
import { Link } from 'react-router'

import SidebarAuthorItem from './SidebarAuthorItem'

// material
import CircularProgress from 'material-ui/CircularProgress';


export default class LeftSidebar extends Component {

	render() {

		const { books, genres, authors } = this.props;

		return (
			<aside class="leftsidebar__container">

				{ books === null 

					? <CircularProgress style={{display: "block", margin: "50px auto" }} size={1} />

					: <div>
						<article class="leftsidebar__block">
							<h3 class="leftsidebar__title">Авторы:</h3>

							<ul class="leftsidebar__list">
								<li><Link to="/">— Все авторы —</Link></li>
								{
									Object.keys(authors).map((a, index) => {
										return (
											<SidebarAuthorItem 
												key={index} 
												id={authors[a].id} 
												name={authors[a].name}
												books={books}
											/>
										)
									})
								}
							</ul>
						</article>


						<article class="leftsidebar__block">
							<h3 class="leftsidebar__title">Жанры:</h3>
							
							<ul class="leftsidebar__list">
								<li><Link to="/">— Все жанры —</Link></li>
								{
									Object.keys(genres).map((g, index) => {
										return (
											<li key={index}><Link to={ `/?genre=${genres[g].id}` }>{genres[g].name}</Link></li>
										)
									})
								}

							</ul>
						</article>
					</div>
				}

			</aside>
		)
	}
}
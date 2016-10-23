import React, { Component } from 'react'
import { Link } from 'react-router'

// material-ui
import AppBar from 'material-ui/AppBar'


export default class Header extends Component {
	render() {

		const HeaderTitle = () => {
			return (
				<Link to="/">
					<span>book
						<span style={{ fontWeight: 700 }}>Z</span>
					</span>
				</Link>
			)
		}

		return (
			<AppBar title={ <HeaderTitle /> } showMenuIconButton={false} />
		)
	}
}
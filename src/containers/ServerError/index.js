import React, { Component } from 'react'


export default class ServerError extends Component {
	render() {
		return (
			<div style={{ textAlign: 'center', margin: '50px 0'}}>
				<h2>
					Hey, boy!
					<br />
					I think you forgot to start the <span style={{ fontWeight: '700' }}>JSON-SERVER</span>...
				</h2>
			</div>
		)
	}
}
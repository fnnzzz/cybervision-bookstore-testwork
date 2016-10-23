import React, { Component, PropTypes } from 'react'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import reducers from 'reducers'


// middlewares 
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware';


// polyfills
import 'babel-polyfill'
import 'isomorphic-fetch'


// click/tap handlers for material-ui
import injectTapEventPlugin from "react-tap-event-plugin"
injectTapEventPlugin();


// material-ui connector
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


// main styles
import 'assets/styles/main.scss'

// lato-font
import 'assets/fonts/lato/Lato-Regular.woff';
import 'assets/fonts/lato/Lato-Regular.woff2';
import 'assets/fonts/lato/Lato-Regular.eot';
import 'assets/fonts/lato/Lato-Regular.ttf';




import Header from 'components/Header'


const store = createStore(reducers,
	compose(
		applyMiddleware(thunk, promiseMiddleware()),
		// is here we mount redux-devtool
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);



class initApp extends Component {

	getChildContext() {
		return {
			location: this.props.location,
			routeParams: this.props.params
		}
	}

	render() {
		return (
			<Provider store={store}>
				<MuiThemeProvider muiTheme={getMuiTheme()}>
					<main>
						<Header />
						{this.props.children}
					</main>
				</MuiThemeProvider>
			</Provider>
		)
	}
}


initApp.childContextTypes = {
    location: React.PropTypes.object,
    routeParams: React.PropTypes.object
}

initApp.propTypes = {
	children: PropTypes.node.isRequired
};

export default initApp;
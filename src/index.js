import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Provider, connect } from 'react-redux';
import PropTypes from 'prop-types';
import Store from './store';
import Transfer from 'Components/Transfer';
import Data from './data.json';
class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div style={{ height: '400px' }}>
				<Transfer data={Data} />
			</div>
		);
	}
}

ReactDOM.render(
	<Provider store={Store}>
		<App />
	</Provider>,
	document.querySelector('#app')
);

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Provider, connect } from 'react-redux';
import PropTypes from 'prop-types';
import Store from 'Store';
import { setLeftTreeArray } from 'Store/action';
import Transfer from 'Components/Transfer';
import Data from './data.json';
class App extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.setLeftTreeArray(Data);
	}

	render() {
		return (
			<div style={{ height: '400px' }}>
				<Transfer />
			</div>
		);
	}
}
App.PropTypes = {
	setLeftTreeArray: PropTypes.func.isRequired
};
const APP = connect((state) => ({}), {
	setLeftTreeArray
})(App);
ReactDOM.render(
	<Provider store={Store}>
		<APP />
	</Provider>,
	document.querySelector('#app')
);

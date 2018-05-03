import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Provider, connect } from 'react-redux';
import PropTypes from 'prop-types';
import Store from 'Store';
import { setLeftTreeArray, setRightTreeArray, setAllTreeArray } from 'Store/action';
import Transfer from 'Components/Transfer';
import Data from './data.json';
const leftTree = Data;
const rightTree = [];
class App extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.setAllTreeArray(leftTree.concat(rightTree));
		this.props.setLeftTreeArray(leftTree);
		this.props.setRightTreeArray(rightTree);
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
	setAllTreeArray,
	setLeftTreeArray,
	setRightTreeArray
})(App);
ReactDOM.render(
	<Provider store={Store}>
		<APP />
	</Provider>,
	document.querySelector('#app')
);

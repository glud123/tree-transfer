import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TreeTransfer from '../index';
import Data from './data.json';
const leftTree = Data;
const rightTree = [];
// console.log(TreeTransfer);

class App extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {}

	render() {
		return (
			<div style={{ height: '400px' }}>
				<TreeTransfer leftTreeData={leftTree} rightTreeData={rightTree} />
			</div>
		);
	}
}
ReactDOM.render(<App />, document.querySelector('#app'));

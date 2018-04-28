import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Transfer from 'Components/Transfer';
class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Transfer />
			</div>
		);
	}
}
ReactDOM.render(<App />, document.querySelector('#app'));

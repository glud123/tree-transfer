import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Store from 'Store';
import Middleware from 'Components/Middleware';
import {getAllTreeData} from 'Util/MakeTreeData';
class TreeTransfer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Provider store={Store}>
				<Middleware {...this.props} />
			</Provider>
		);
	}
}
TreeTransfer.propTypes = {
	leftTreeData: PropTypes.array.isRequired,
	rightTreeData: PropTypes.array.isRequired,
	leftTitle:PropTypes.string.isRequired,
	rightTitle:PropTypes.string.isRequired,
	getAllTreeData:PropTypes.func.isRequired,
	treeWidth:PropTypes.number,
	treeHeight:PropTypes.number,
	showSearch:PropTypes.bool,
	transferBtns:PropTypes.array,
	placeholder:PropTypes.string,
};
export default {TreeTransfer,getAllTreeData};

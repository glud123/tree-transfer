import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setLeftTreeArray, setRightTreeArray, setAllTreeArray } from 'Store/action';
import Transfer from 'Components/Transfer';

class Middleware extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		let { leftTreeData, rightTreeData, setAllTreeArray, setLeftTreeArray, setRightTreeArray } = this.props;
		setAllTreeArray(leftTreeData.concat(rightTreeData));
		setLeftTreeArray(leftTreeData);
		setRightTreeArray(rightTreeData);
	}
	render() {
		return <Transfer />;
	}
}
Middleware.propTypes = {
	leftTreeData: PropTypes.array.isRequired,
	rightTreeData: PropTypes.array.isRequired,
	setAllTreeArray: PropTypes.func.isRequired,
	setLeftTreeArray: PropTypes.func.isRequired,
	setRightTreeArray: PropTypes.func.isRequired
};
export default connect((state) => ({}), {
	setAllTreeArray,
	setLeftTreeArray,
	setRightTreeArray
})(Middleware);

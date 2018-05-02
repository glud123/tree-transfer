import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tree from 'Components/Tree';
import { MakeTreeData } from 'Util/MakeTreeData';
import { setLeftTreeData } from 'Store/action';
import 'Style/transfer.less';

class Transfer extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.setLeftTreeData(MakeTreeData(this.props.leftTreeArray));
		console.log(this.props);
	}
	// componentWillReceiveProps(nextProps) {
	// 	console.log(this.props);
	// }
	render() {
		console.log(this.props.leftTreeArray.length);

		return (
			<div className="tree-transfer">
				<div className="tree-transfer-container">
					<Tree data={this.props.leftTreeData} />
				</div>
				<div className="tree-transfer-middle">
					<Button>{`>>`}</Button>
					<Button>{`>`}</Button>
					<Button>{`<`}</Button>
					<Button>{`<<`}</Button>
				</div>
				<div className="tree-transfer-container">
					<Tree data={this.props.rightTreeData} />
				</div>
			</div>
		);
	}
}
Transfer.PropTypes = {
	leftTreeArray: PropTypes.array.isRequired,
	leftTreeData: PropTypes.array.isRequired,
	rightTreeData: PropTypes.array.isRequired,
	setLeftTreeData: PropTypes.func.isRequired
};
export default connect(
	(state) => ({
		leftTreeArray: state.TreeTransferData.leftTreeArray,
		leftTreeData: state.TreeTransferData.leftTreeData,
		rightTreeData: state.TreeTransferData.rightTreeData
	}),
	{ setLeftTreeData }
)(Transfer);

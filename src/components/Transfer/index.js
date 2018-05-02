import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tree from 'Components/Tree';
import { MakeTreeData } from 'Util/MakeTreeData';
import 'Style/transfer.less';

class Transfer extends Component {
	constructor(props) {
		super(props);
	}
	
	componentWillMount() {
		console.log(this.props);
	}
	
	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
	}
	render() {
		console.log(this.props.data.length);

		MakeTreeData(this.props.data);
		return (
			<div className='tree-transfer'>
				<div className='tree-transfer-container'>
					<Tree />
				</div>
				<div className='tree-transfer-middle'>
					<Button>{`>>`}</Button>
					<Button>{`>`}</Button>
					<Button>{`<`}</Button>
					<Button>{`<<`}</Button>
				</div>
				<div className='tree-transfer-container'>
					<Tree />
				</div>
			</div>
		);
	}
}
Transfer.PropTypes = {
	leftTreeArray: PropTypes.array.isRequired
};
export default connect(
	(state) => ({
		leftTreeArray: state.TreeTransferData.leftTreeArray
	}),
	{}
)(Transfer);

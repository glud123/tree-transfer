import React, { Component } from 'react';
import { Button } from 'antd';
import Tree from 'Components/Tree';
import 'Style/transfer.less';
class Transfer extends Component {
	constructor(props) {
		super(props);
	}
	render() {
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
export default Transfer;

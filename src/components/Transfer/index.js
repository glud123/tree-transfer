import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tree from 'Components/Tree';
import { MakeTreeData, TransTreeData } from 'Util/MakeTreeData';
import {
	setLeftTreeArray,
	setRightTreeArray,
	setLeftTreeData,
	setRightTreeData,
	setLeftSelectedKey,
	setRightSelectedKey
} from 'Store/action';
import 'Style/transfer.less';
class Transfer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			btns: [
				{
					key: 'allToRight',
					name: '>>',
					className: ''
				},
				{
					key: 'toRight',
					name: '>',
					className: ''
				},
				{
					key: 'tolLeft',
					name: '<',
					className: ''
				},
				{
					key: 'allToLeft',
					name: '<<',
					className: ''
				}
			],
			btnType: ''
		};
	}
	/**
	 * 穿梭按钮操作
	 *@param {String} key 
	 */
	handleBtnClick = (key) => {
		let nodes;
		switch (key) {
			case 'allToRight':
				this.setState({
					btnType: 'allToRight'
				});
				this.props.setRightTreeData(MakeTreeData(this.props.allTreeArray));
				this.props.setLeftTreeData([]);
				this.props.setRightTreeArray(this.props.allTreeArray);
				this.props.setLeftTreeArray([]);
				break;
			case 'toRight':
				this.setState({
					btnType: 'toRight'
				});
				nodes = TransTreeData(this.props.leftSelectedKey[0], this.props.leftTreeArray).concat(
					this.props.rightTreeArray
				);
				this.props.setRightTreeArray(nodes);
				this.props.setRightTreeData(MakeTreeData(nodes));
				break;
			case 'tolLeft':
				this.setState({
					btnType: 'tolLeft'
				});
				nodes = TransTreeData(this.props.leftSelectedKey[0], this.props.rightTreeArray).concat(
					this.props.leftTreeArray
				);
				this.props.setLeftTreeArray(nodes);
				this.props.setLeftTreeData(MakeTreeData(nodes));
				break;
			case 'allToLeft':
				this.setState({
					btnType: 'allToLeft'
				});
				this.props.setRightTreeData([]);
				this.props.setLeftTreeData(MakeTreeData(this.props.allTreeArray));
				this.props.setRightTreeArray([]);
				this.props.setLeftTreeArray(this.props.allTreeArray);
				break;
			default:
				break;
		}
	};
	/**
	 * 创建操作按钮渲染
	 * @param {Array} btns
	 */
	createBtns = (btns) => {
		let btnDom = [];
		return btns.map((item, index) => {
			let { name, className, key } = item;
			return (
				<Button key={key} className={className} onClick={this.handleBtnClick.bind(this, key)}>
					{name}
				</Button>
			);
		});
	};
	/**
	 * 树选择方法、
	 * @param {String} key // left - 左树 right - 右树
	 */
	treeSelectFun = (key) => {
		switch (key) {
			case 'left':
				return (selectedKeys, e) => {
					console.log(selectedKeys);
					this.props.setLeftSelectedKey(selectedKeys);
					// transTreeData(selectedKeys);
				};
				break;
			case 'right':
				return (selectedKeys, e) => {
					console.log(selectedKeys);
					this.props.setRightSelectedKey(selectedKeys);
					// transTreeData(selectedKeys);
				};
				break;
			default:
				break;
		}
	};
	componentWillMount() {
		this.props.setLeftTreeData(MakeTreeData(this.props.leftTreeArray));
		this.props.setRightTreeData(MakeTreeData(this.props.rightTreeArray));
		console.log(this.props);
	}
	render() {
		let { btns } = this.state;
		return (
			<div className='tree-transfer'>
				<div className='tree-transfer-container'>
					<Tree
						data={this.props.leftTreeData}
						dataList={this.props.leftTreeArray}
						onSelect={this.treeSelectFun('left')}
					/>
				</div>
				<div className='tree-transfer-middle'>{this.createBtns(btns)}</div>
				<div className='tree-transfer-container'>
					<Tree
						data={this.props.rightTreeData}
						dataList={this.props.rightTreeArray}
						onSelect={this.treeSelectFun('right')}
					/>
				</div>
			</div>
		);
	}
}
Transfer.PropTypes = {
	allTreeArray: PropTypes.array.isRequired,
	leftTreeArray: PropTypes.array.isRequired,
	rightTreeArray: PropTypes.array.isRequired,
	setLeftTreeArray: PropTypes.func.isRequired,
	setRightTreeArray: PropTypes.func.isRequired,
	leftTreeData: PropTypes.array.isRequired,
	rightTreeData: PropTypes.array.isRequired,
	setLeftTreeData: PropTypes.func.isRequired,
	setRightTreeData: PropTypes.func.isRequired,
	setLeftSelectedKey: PropTypes.func.isRequired,
	setRightSelectedKey: PropTypes.func.isRequired,
	leftSelectedKey: PropTypes.string.isRequired,
	rightSelectedKey: PropTypes.string.isRequired
};
export default connect(
	(state) => ({
		allTreeArray: state.TreeTransferData.allTreeArray,
		leftTreeArray: state.TreeTransferData.leftTreeArray,
		rightTreeArray: state.TreeTransferData.rightTreeArray,
		leftTreeData: state.TreeTransferData.leftTreeData,
		rightTreeData: state.TreeTransferData.rightTreeData,
		leftSelectedKey: state.TreeTransferData.leftSelectedKey,
		rightSelectedKey: state.TreeTransferData.rightSelectedKey
	}),
	{ setLeftTreeArray, setRightTreeArray, setLeftTreeData, setRightTreeData, setLeftSelectedKey, setRightSelectedKey }
)(Transfer);

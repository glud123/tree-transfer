import React, {
	Component
} from 'react';
import {
	Button
} from 'antd';
import {
	connect
} from 'react-redux';
import PropTypes from 'prop-types';
import Tree from 'Components/Tree';
import {
	MakeTreeData,
	TransTreeData,
	MergeArrayData
} from 'Util/MakeTreeData';
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
			btns: [{
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
		let {
			allTreeArray,
			leftTreeArray,
			rightTreeArray,
			leftSelectedKey,
			rightSelectedKey,
			setRightTreeData,
			setLeftTreeData,
			setRightTreeArray,
			setLeftTreeArray
		} = this.props;
		let nodes;
		switch (key) {
			case 'allToRight':
				this.setState({
					btnType: 'allToRight'
				});
				setRightTreeData(MakeTreeData(allTreeArray));
				setLeftTreeData([]);
				setRightTreeArray(allTreeArray);
				setLeftTreeArray([]);
				break;
			case 'toRight':
				this.setState({
					btnType: 'toRight'
				});
				let toRightArray = TransTreeData(leftSelectedKey[0], leftTreeArray);
				nodes = MergeArrayData(toRightArray.transferArray, rightTreeArray);
				setRightTreeArray(nodes);
				setRightTreeData(MakeTreeData(nodes));
				setLeftTreeArray(toRightArray.newArray);
				setLeftTreeData(MakeTreeData(toRightArray.newArray));
				break;
			case 'tolLeft':
				this.setState({
					btnType: 'tolLeft'
				});
				let toLeftArray = TransTreeData(rightSelectedKey[0], rightTreeArray);
				nodes = MergeArrayData(toLeftArray.transferArray, leftTreeArray);
				setLeftTreeArray(nodes);
				setLeftTreeData(MakeTreeData(nodes));
				setRightTreeArray(toLeftArray.newArray);
				setRightTreeData(MakeTreeData(toLeftArray.newArray));
				break;
			case 'allToLeft':
				this.setState({
					btnType: 'allToLeft'
				});
				setRightTreeData([]);
				setLeftTreeData(MakeTreeData(allTreeArray));
				setRightTreeArray([]);
				setLeftTreeArray(allTreeArray);
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
			let {
				name,
				className,
				key
			} = item;
			return ( <Button key = {key} className = {`transfer-btn ${className}`} onClick = {this.handleBtnClick.bind(this, key)} > 
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
	}
	render() {
		let {btns} = this.state;
		let {leftTitle,rightTitle,leftTreeData,rightTreeData,leftTreeArray,rightTreeArray} = this.props;
		return (
			<div className = "tree-transfer" >
				<div className = "tree-transfer-container" style={{"width":this.props.treeWidth}} >
					{leftTitle.length>0?<div className='tree-title'>{leftTitle}</div>:null}
					<Tree 
					style ={{"height":`${leftTitle.length>0?'calc(100% - 34px)':'100%'}`}}
					data = {leftTreeData} 
					dataList = {leftTreeArray}
					onSelect = {this.treeSelectFun('left')}
					/> 
				</div> 
				<div className = "tree-transfer-middle" >
					{this.createBtns(btns)} 
				</div> 
				<div className = "tree-transfer-container" style={{"width":this.props.treeWidth}}>
					{rightTitle.length>0?<div className='tree-title'>{rightTitle}</div>:null}
					<Tree 
					style ={{"height":`${rightTitle.length>0?'calc(100% - 34px)':'100%'}`}}
					data = {rightTreeData} 
					dataList = {rightTreeArray} 
					onSelect = {this.treeSelectFun('right')}
					/> 
				</div>
			</div>
		);
	}
}
Transfer.propTypes = {
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
	leftSelectedKey: PropTypes.array.isRequired,
	rightSelectedKey: PropTypes.array.isRequired,
	leftTitle:PropTypes.string.isRequired,
	rightTitle:PropTypes.string.isRequired,
};
export default connect(
	(state) => ({
		allTreeArray: state.TreeTransferData.allTreeArray,
		leftTreeArray: state.TreeTransferData.leftTreeArray,
		rightTreeArray: state.TreeTransferData.rightTreeArray,
		leftTreeData: state.TreeTransferData.leftTreeData,
		rightTreeData: state.TreeTransferData.rightTreeData,
		leftSelectedKey: state.TreeTransferData.leftSelectedKey,
		rightSelectedKey: state.TreeTransferData.rightSelectedKey,
		leftTitle:state.TreeTransferData.leftTitle,
		rightTitle:state.TreeTransferData.rightTitle
	}), {
		setLeftTreeArray,
		setRightTreeArray,
		setLeftTreeData,
		setRightTreeData,
		setLeftSelectedKey,
		setRightSelectedKey
	}
)(Transfer);
import React, {
	Component
} from 'react';
import {
	connect
} from 'react-redux';
import PropTypes from 'prop-types';
import {
	setLeftTreeArray,
	setRightTreeArray,
	setAllTreeArray,
	setLeftTreeData,
	setRightTreeData,
	setLeftTitle,
	setRightTitle,
	setTreeWidth,
	setTreeHeight,
	setSearchShow,
	setTransferBtns,
	setPlaceholder
} from 'Store/action';
import {
	MakeTreeData
} from 'Util/MakeTreeData';
import Transfer from 'Components/Transfer';

class Middleware extends Component {
	constructor(props) {
		super(props);
	}
	updateProps = (propsData)=>{
		let {
			leftTreeData,
			rightTreeData,
			leftTreeArray,
			rightTreeArray,
			setLeftTreeData,
			setRightTreeData,
			leftTitle,
			rightTitle,
			treeWidth,
			treeHeight,
			setAllTreeArray,
			setLeftTreeArray,
			setRightTreeArray,
			setLeftTitle,
			setRightTitle,
			setTreeWidth,
			setTreeHeight,
			setSearchShow,
			showSearch,
			transferBtns,
			setTransferBtns,
			setPlaceholder,
			placeholder
		} = propsData;
		leftTreeData = leftTreeData ? leftTreeData : [];
		rightTreeData = rightTreeData ? rightTreeData : [];
		
		setLeftTitle(leftTitle ? leftTitle : '');
		setRightTitle(rightTitle ? rightTitle : '');
		setTreeWidth(treeWidth ? treeWidth : 250);
		setTreeHeight(treeHeight ? treeHeight : 400);
		setSearchShow(showSearch ? true : false);
		setTransferBtns(transferBtns ? transferBtns : [{
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
		]);
		setPlaceholder(placeholder ? placeholder : '');
		setLeftTreeData(MakeTreeData(leftTreeArray));
		setRightTreeData(MakeTreeData(rightTreeArray));
	}
	updateTreeArray = (propsData)=>{
		let {leftTreeData,
			rightTreeData,
			setAllTreeArray,
			setLeftTreeArray,
			setRightTreeArray} = propsData;
		setAllTreeArray(leftTreeData.concat(rightTreeData));
		setLeftTreeArray(leftTreeData);
		setRightTreeArray(rightTreeData);
	}
	componentWillMount() {
		this.updateTreeArray(this.props);
		this.updateProps(this.props);
	}
	componentWillReceiveProps(nextProps){
		if(this.props.leftTreeData.length !== nextProps.leftTreeData.length){
			this.updateTreeArray(nextProps);
		}
		this.updateProps(nextProps);
	}
	getAllTreeData = () => {
		return {
			leftTreeNewData: this.props.leftTreeArray,
			rightTreeNewData: this.props.rightTreeArray
		}
	}
	componentDidMount() {
		if (this.props.getAllTreeData) {
			this.props.getAllTreeData(this.getAllTreeData);
		}
	}

	render() {
		return <Transfer / > ;
	}
}
Middleware.propTypes = {
	leftTreeData: PropTypes.array.isRequired,
	rightTreeData: PropTypes.array.isRequired,
	setAllTreeArray: PropTypes.func.isRequired,
	setLeftTreeArray: PropTypes.func.isRequired,
	setRightTreeArray: PropTypes.func.isRequired,
	setLeftTreeData: PropTypes.func.isRequired,
	setRightTreeData: PropTypes.func.isRequired,
	leftTitle: PropTypes.string.isRequired,
	rightTitle: PropTypes.string.isRequired,
	setLeftTitle: PropTypes.func.isRequired,
	setRightTitle: PropTypes.func.isRequired,
	getAllTreeData: PropTypes.func.isRequired,
	setTreeWidth: PropTypes.func.isRequired,
	setTreeHeight: PropTypes.func.isRequired,
	setSearchShow: PropTypes.func.isRequired,
	setTransferBtns: PropTypes.func.isRequired,
	setPlaceholder: PropTypes.func.isRequired,
	treeWidth: PropTypes.number,
	treeHeight: PropTypes.number,
	showSearch: PropTypes.bool,
	transferBtns: PropTypes.array,
	placeholder: PropTypes.string
};
export default connect((state) => ({
	leftTreeArray: state.TreeTransferData.leftTreeArray,
	rightTreeArray: state.TreeTransferData.rightTreeArray,
}), {
	setAllTreeArray,
	setLeftTreeArray,
	setRightTreeArray,
	setLeftTreeData,
	setRightTreeData,
	setLeftTitle,
	setRightTitle,
	setTreeWidth,
	setTreeHeight,
	setSearchShow,
	setTransferBtns,
	setPlaceholder
})(Middleware);
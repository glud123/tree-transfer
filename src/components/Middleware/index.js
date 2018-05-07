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
	setLeftTitle,
	setRightTitle,
	setTreeWidth,
	setTreeHeight,
	setSearchShow,
	setTransferBtns,
	setPlaceholder
} from 'Store/action';
import Transfer from 'Components/Transfer';

class Middleware extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		let {
			leftTreeData,
			rightTreeData,
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
		} = this.props;
		leftTreeData = leftTreeData ? leftTreeData : [];
		rightTreeData = rightTreeData ? rightTreeData : [];
		setAllTreeArray(leftTreeData.concat(rightTreeData));
		setLeftTreeArray(leftTreeData);
		setRightTreeArray(rightTreeData);
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
	setLeftTitle,
	setRightTitle,
	setTreeWidth,
	setTreeHeight,
	setSearchShow,
	setTransferBtns,
	setPlaceholder
})(Middleware);
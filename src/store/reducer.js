import * as TreeTransfer from './action-type';

let defaultState = {
	// 完整树原始数据
	allTreeArray:[],
	// 左树平铺原始树组
	leftTreeArray: [],
	// 右树平铺原始数组
	rightTreeArray: [],
	// 左树树数组
	leftTreeData: [],
	// 右树树数组
	rightTreeData: [],
	// 选中左侧的树节点
	leftSelectedKey: [],
	// 选中右侧的树节点
	rightSelectedKey: []
};
// 首页表单数据
export const TreeTransferData = (state = defaultState, action = {}) => {
	switch (action.type) {
		case TreeTransfer.CLEARDATA:
			return { ...state, ...defaultState };
		case TreeTransfer.SETALLTREEARRAY:
			return { ...state, ...{ allTreeArray: action.data } };
		case TreeTransfer.SETLEFTTREEARRAY:
			return { ...state, ...{ leftTreeArray: action.data } };
		case TreeTransfer.SETRIGHTTREEARRAY:
			return { ...state, ...{ rightTreeArray: action.data } };
		case TreeTransfer.SETLEFTTREEDATA:
			return { ...state, ...{ leftTreeData: action.data } };
		case TreeTransfer.SETRIGHTTREEDATA:
			return { ...state, ...{ rightTreeData: action.data } };
		case TreeTransfer.SETLEFTSELECTEDKEY:
			return { ...state, ...{ leftSelectedKey: action.data } };
		case TreeTransfer.SETRIGHTSELECTEDKEY:
			return { ...state, ...{ rightSelectedKey: action.data } };
		default:
			return state;
	}
};

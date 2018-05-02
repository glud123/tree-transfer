import * as TreeTransfer from './action-type';

let defaultState = {
	// 左树平铺原始树组
	leftTreeArray: [],
	// 右树平铺原始数组
	rightTreeArray: [],
	// 左树树数组
	leftTreeData: [],
	// 右树树数组
	rightTreeData: []
};
// 首页表单数据
export const TreeTransferData = (state = defaultState, action = {}) => {
	switch (action.type) {
		case TreeTransfer.CLEARDATA:
			return { ...state, ...defaultState };
		case TreeTransfer.STELEFTTREEARRAY:
			return { ...state, ...{ leftTreeArray: action.data } };
		case TreeTransfer.SETRIGHTTREEARRAY:
			return { ...state, ...{ rightTreeArray: action.data } };
		case TreeTransfer.STELEFTTREEDATA:
			return { ...state, ...{ leftTreeData: action.data } };
		case TreeTransfer.SETRIGHTTREEDATA:
			return { ...state, ...{ rightTreeData: action.data } };
		default:
			return state;
	}
};

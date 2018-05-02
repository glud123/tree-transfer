import * as TreeTransfer from './action-type';

let defaultState = {
	// 左树平铺原始树组
	leftTreeArray: [],
	// 右树平铺原始数组
	rightTreeArray: []
	//
};
// 首页表单数据
export const TreeTransferData = (state = defaultState, action = {}) => {
	switch (action.type) {
		case TreeTransfer.CLEARDATA:
			return { ...state, ...defaultState };
		case TreeTransfer.STELEFTTREE:
			return { ...state, ...{ leftTreeArray: action.data } };
		case TreeTransfer.SETRIGHTTREE:
			return { ...state, ...{ rightTreeArray: action.data } };
		default:
			return state;
	}
};

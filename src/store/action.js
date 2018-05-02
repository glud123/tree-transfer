import * as TreeTransfer from './action-type';

// 清空数据
export const clearData = () => {
	return {
		type: TreeTransfer.CLEARDATA
	};
};
// 设置左树原始数据
export const setLeftTreeData = (data) => {
	return {
		type: TreeTransfer.STELEFTTREE,
		data
	};
};
// 设置右树原始数据
export const setRightTreeData = (data) => {
	return {
		type: TreeTransfer.SETRIGHTTREE,
		data
	};
};
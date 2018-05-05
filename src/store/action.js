import * as TreeTransfer from './action-type';

// 清空数据
export const clearData = () => {
	return {
		type: TreeTransfer.CLEARDATA
	};
};
// 设置完整树原始数据
export const setAllTreeArray = (data) => {
	return {
		type: TreeTransfer.SETALLTREEARRAY,
		data
	};
};
// 设置左树原始数据
export const setLeftTreeArray = (data) => {
	return {
		type: TreeTransfer.SETLEFTTREEARRAY,
		data
	};
};
// 设置右树原始数据
export const setRightTreeArray = (data) => {
	return {
		type: TreeTransfer.SETRIGHTTREEARRAY,
		data
	};
};
// 设置左树原始数据
export const setLeftTreeData = (data) => {
	return {
		type: TreeTransfer.SETLEFTTREEDATA,
		data
	};
};
// 设置右树原始数据
export const setRightTreeData = (data) => {
	return {
		type: TreeTransfer.SETRIGHTTREEDATA,
		data
	};
};
// 设置选中左侧树节点
export const setLeftSelectedKey = (data) => {
	return {
		type: TreeTransfer.SETLEFTSELECTEDKEY,
		data
	};
};
// 设置选中右侧树节点
export const setRightSelectedKey = (data) => {
	return {
		type: TreeTransfer.SETRIGHTSELECTEDKEY,
		data
	};
};
// 设置左标题
export const setLeftTitle = (data) => {
	return {
		type: TreeTransfer.SETLEFTTITLE,
		data
	};
};
// 设置右标题
export const setRightTitle = (data) => {
	return {
		type: TreeTransfer.SETRIGHTTITLE,
		data
	};
};
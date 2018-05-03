import _ from 'lodash';
/**
 * 将树形平铺数据进行分离整理
 * @param {Array} treeData 
 * @returns {treeOBj,treeArray}
 */
const separateData = (treeData) => {
	let treeObj = {},
		treeArray = [];
	treeData.map((item, index) => {
		if (item.parentKey) {
			if (!treeObj[item.parentKey]) {
				treeObj[item.parentKey] = [];
			}
			treeObj[item.parentKey].push(item);
		} else {
			treeArray.push(item);
		}
	});
	return {
		treeObj,
		treeArray
	};
};
/**
 * 整理树对象,将原始树对象进行合并,为每个节点添加是否为叶子节点属性
 * @param {Object} treeObj 
 */
const makeTreeObject = (treeObj) => {
	let dataObject = _.cloneDeep(treeObj);
	for (const itemKey in dataObject) {
		if (dataObject.hasOwnProperty(itemKey)) {
			const itemEl = dataObject[itemKey];
			itemEl.map((item, i) => {
				if (dataObject.hasOwnProperty(item.key)) {
					item.children = dataObject[item.key];
					item.isLeaf = false;
				} else {
					item.isLeaf = true;
				}
				return item;
			});
			dataObject[itemKey] = itemEl;
		}
	}
	return dataObject;
};
/**
 * 整理树数组
 * @param {Array} treeArray 
 * @returns 最终的树数组
 */
const makeTreeArray = (treeArray) => {
	let dataArray = _.cloneDeep(treeArray);
	return (treeObj) => {
		return dataArray.map((item, index) => {
			if (treeObj.hasOwnProperty(item.key)) {
				item.children = treeObj[item.key];
				item.isLeaf = false;
			} else {
				item.isLeaf = true;
			}
			return item;
		});
	};
};
/**
 * 
 * @param {Object} Object - treeObj 树数组除第一层外的元素对象 treeArray 树数组第一层元素数组  
 */
const mergeData = ({ treeObj, treeArray }) => {
	return makeTreeArray(treeArray)(makeTreeObject(treeObj));
};

/**
 * 对树形数据进行整理
 * @param {Array} data 
 */
export const MakeTreeData = (data) => {
	let treeArray = _.cloneDeep(data);
	let treeData = mergeData(separateData(treeArray));
	return treeData;
	console.log(treeData);
};
/**
 * 获取选中节点父节点
 * @param {Array} arrayData  原始数组
 * @param {Object} treeObj  原始树对象
 * @param {Object} nodeData  选中节点对象
 * @param {Array} parentArray  选中节点及其所有父节点
 */
const getParentNodeData = (arrayData, treeObj, nodeData, parentArray) => {
	let { key, parentKey } = nodeData;
	let parentNodeData;
	if (parentKey) {
		parentNodeData = arrayData.find((hItem) => hItem.key === parentKey);
	} else {
		parentNodeData = arrayData.find((hItem) => hItem.key === key);
	}
	if (treeObj.hasOwnProperty(parentKey)) {
		let item = treeObj[parentKey];
		let node = item.find((i) => i.key === key);
		if (node) {
			parentArray.push(node);
			return getParentNodeData(arrayData, treeObj, parentNodeData, parentArray);
		}
	} else {
		parentArray.push(parentNodeData);
	}
	return parentArray;
};
/**
 * 获取所有子节点平铺数组
 * @param {Object} treeObj 树对象 
 * @param {Object} nodeData 节点数据
 * @param {Array} childrenArray 所有子节点平铺数组
 */
const getChildrenNodeData = (treeObj, nodeData, childrenArray) => {
	let { key, parentKey } = nodeData;
	if (treeObj.hasOwnProperty(key)) {
		let item = treeObj[key];
		return getChildData(treeObj, item, childrenArray);
	}
};
/**
 * 递归找到说有子节点的子节点
 * @param {Object} treeObj  树对象
 * @param {Array} childrenNodes 子节点数组
 * @param {Array} childrenArray  所有子节点平铺数组
 */
const getChildData = (treeObj, childrenNodes, childrenArray) => {
	childrenNodes.map((item, index) => {
		let { key } = item;
		if (treeObj.hasOwnProperty(key)) {
			getChildData(treeObj, treeObj[key], childrenArray);
		}
		childrenArray.push(item);
	});
	return childrenArray;
};

/**
 * 获取属性穿梭之后的树形数据
 * @param {Array} data 
 */
export const TransTreeData = (key, arrayData) => {
	let nodeData = arrayData.find((item) => item.key === key);
	let { treeObj, treeArray } = separateData(arrayData);
	let parentArray = [],
		childrenArray = [];
	parentArray = getParentNodeData(arrayData, treeObj, nodeData, parentArray);
	childrenArray = getChildrenNodeData(treeObj, nodeData, childrenArray);
	return parentArray.concat(childrenArray);
};

import _ from 'lodash';

/**
 * 将树形平铺数据进行分离整理
 * @param {Array} treeData 
 * @returns {treeOBj,treeArray}
 */
const separateData = (treeData) => {
	let treeOBj = {},
		treeArray = [];
	treeData.map((item, index) => {
		if (item.parentKey) {
			if (!treeOBj[item.parentKey]) {
				treeOBj[item.parentKey] = [];
			}
			treeOBj[item.parentKey].push(item);
		} else {
			treeArray.push(item);
		}
	});
	return {
		treeOBj,
		treeArray
	};
};

const makeTreeObject = (treeOBj) => {
	let dataObject = _.cloneDeep(treeOBj);
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

const makeTreeArray = (treeArray) => {
	let dataArray = _.cloneDeep(treeArray);
	return (treeOBj) => {
		return dataArray.map((item, index) => {
			if (treeOBj.hasOwnProperty(item.key)) {
				item.children = treeOBj[item.key];
				item.isLeaf = false;
			} else {
				item.isLeaf = true;
			}
			return item;
		});
	};
};

const mergeData = ({ treeOBj, treeArray }) => {
	return makeTreeArray(treeArray)(makeTreeObject(treeOBj));
};

/**
 * 对树形数据进行整理
 * @param {Array} data 
 */
export const MakeTreeData = (data) => {
	let treeArray = _.cloneDeep(data);
	// console.log(data);
	// let { treeOBj, treeArray } = separateData(treeData);
	let treeData = mergeData(separateData(treeArray));
	console.log(treeData);
	// console.log(treeOBj);
	// console.log(treeArray);
};

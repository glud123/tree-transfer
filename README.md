## tree-transfer
---
React tree transfer Component with antd

### Install
```
npm i tree-transfer -S
```
### Example
```
npm i 

npm run dev
```

### Usage
```javaScript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {TreeTransfer,getAllTreeData} from 'tree-transfer';
const Data = [
	{
		"key": "0-0",
		"title": "T0-0"
	},
	{
		"key": "0-0-0",
		"title": "T0-0-0",
		"parentKey": "0-0"
	},
	{
		"key": "0-0-0-0",
		"title": "T0-0-0-0",
		"parentKey": "0-0-0"
	},
	{
		"key": "0-0-0-0-0",
		"title": "T0-0-0-0-0",
		"parentKey": "0-0-0-0"
	}
];
const leftTree = Data;
const rightTree = [];

class App extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {}
	handleClick =()=>{
		console.log(getAllTreeData());
	}
	render() {
		return (<div style={{ height: '500px' }}>
				<TreeTransfer 
				placeholder={'Search'}
				showSearch={true} 
				treeWidth={250}
				treeHeight={400}
				getAllTreeData={getAllTreeData} leftTreeData={ leftTree } rightTreeData={ rightTree} 
				leftTitle={'左树'} 
				rightTitle={'右树'}/>	
				<button onClick={this.handleClick}>获取数据</button>
			</div>
		);
	}
}
ReactDOM.render(<App />,document.querySelector('#app'));

```

### API
|参数|说明|类型|默认值
|-|-|-|-|
|showSearch|是否显示搜索框|boolean|false|
|placeholder|搜索框占位符|string|——|
|treeWidth|树容器宽度|number|250|
|treeHeight|树容器高度|number|400|
|leftTitle|左侧容器标题|string|——|
|rightTitle|右侧容器标题|string|——|
|leftTreeData|左侧树数据源|array|[]|
|rightTreeData|右侧树数据源|array|[]|
|getAllTreeData|获取所有树数据|object,{leftTreeNewData:[],rightTreeNewData:[]}|——|
|transferBtns|穿梭按钮定义|array,具体配置见 **穿梭按钮定制**|——|

### 穿梭按钮定制
```javaScript
// transferBtns 默认值
[{
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
}]
```
|参数|说明|类型|默认值
|-|-|-|-|
|key|按钮标识|string|['allToRight -- 全部向右穿梭按钮','toRight -- 向右穿梭按钮','tolLeft -- 向左穿梭按钮','allToLeft -- 全部向左穿梭按钮']|
|name|穿梭按钮显示名称|string|——|
|className|穿梭按钮类名|string|——|
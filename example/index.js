import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {TreeTransfer,getAllTreeData} from '../index';
import Data from './data.json';
import './index.less';
// const leftTree = Data;
// const leftTree = [
// 	{
// 		"key": "0000000000ac00002123",
// 		"title": "was"
// 	},];
// const rightTree = [];

class App extends Component {
	constructor(props) {
		super(props);
		this.state={
			leftTree:[],
			rightTree:[],
			leftTreeNewData:[],
			rightTreeNewData:[]
		}
	}

	componentDidMount() {
		this.setState({
			leftTree :[{
					"key": "0000000000ac00002123",
					"title": "was"
				}]
		});
	}
	handleClick =()=>{
		let{leftTreeNewData,rightTreeNewData} = getAllTreeData();
		this.setState({leftTreeNewData,rightTreeNewData});
	}
	// 将数组转换成字符串
	toString =(array)=>array.map((item)=>JSON.stringify(item));
	// 将字符串进行换行处理
	toString =(array)=>array.map((item)=>JSON.stringify(item));
	render() {
		let {leftTree,rightTree,leftTreeNewData,rightTreeNewData} = this.state;
		return (
			<div>
				<TreeTransfer placeholder={'Search'} showSearch={true} treeHeight={400} treeWidth={250} getAllTreeData={getAllTreeData} leftTreeData={ leftTree } rightTreeData={ rightTree} leftTitle={'左树'} rightTitle={'右树'}/>	
				<button style={{'margin':'10px'}} onClick={this.handleClick}>Get AllTreeData</button>
				<div className='codes'>
					<div>
						<div>左树数据 总条数：{leftTreeNewData.length}</div>
						<textarea className='data-code' value={this.toString(leftTreeNewData).toString().replace(/},{/g,'},\n{')}></textarea>
					</div>
					<div>
						<div>右树数据 总条数：{rightTreeNewData.length}</div>
						<textarea className='data-code' value={this.toString(rightTreeNewData).toString().replace(/},{/g,'},\n{')}></textarea>
					</div>
				</div>
			</div>
		);
	}
}
ReactDOM.render(<App />, document.querySelector('#app'));

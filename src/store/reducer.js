import * as TreeTransfer from './action-type';

let defaultState = {
	// 完整树原始数据
	allTreeArray: [],
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
	rightSelectedKey: [],
	// 左侧标题
	leftTitle: '',
	// 右侧标题
	rightTitle: '',
	// 树宽
	treeWidth: '250',
	// 整个组件的高度
	treeHeight: '400',
	// 是否显示查询框 默认为不显示
	showSearch: false,
	// 穿梭按钮组
	transferBtns: [{
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
	],
	// 搜索框占位符
	placeholder:''
};
// 首页表单数据
export const TreeTransferData = (state = defaultState, action = {}) => {
	switch (action.type) {
		case TreeTransfer.CLEARDATA:
			return { ...state,
				...defaultState
			};
		case TreeTransfer.SETALLTREEARRAY:
			return { ...state,
				...{
					allTreeArray: action.data
				}
			};
		case TreeTransfer.SETLEFTTREEARRAY:
			return { ...state,
				...{
					leftTreeArray: action.data
				}
			};
		case TreeTransfer.SETRIGHTTREEARRAY:
			return { ...state,
				...{
					rightTreeArray: action.data
				}
			};
		case TreeTransfer.SETLEFTTREEDATA:
			return { ...state,
				...{
					leftTreeData: action.data
				}
			};
		case TreeTransfer.SETRIGHTTREEDATA:
			return { ...state,
				...{
					rightTreeData: action.data
				}
			};
		case TreeTransfer.SETLEFTSELECTEDKEY:
			return { ...state,
				...{
					leftSelectedKey: action.data
				}
			};
		case TreeTransfer.SETRIGHTSELECTEDKEY:
			return { ...state,
				...{
					rightSelectedKey: action.data
				}
			};
		case TreeTransfer.SETLEFTTITLE:
			return { ...state,
				...{
					leftTitle: action.data
				}
			};
		case TreeTransfer.SETRIGHTTITLE:
			return { ...state,
				...{
					rightTitle: action.data
				}
			};
		case TreeTransfer.SETTREEWIDTH:
			return { ...state,
				...{
					treeWidth: action.data
				}
			};
		case TreeTransfer.SETTREEHEIGHT:
			return { ...state,
				...{
					treeHeight: action.data
				}
			};
		case TreeTransfer.SETSERACHSHOW:
			return { ...state,
				...{
					showSearch: action.data
				}
			};
		case TreeTransfer.SETTRANSFERBTN:
			return { ...state,
				...{
					transferBtns: action.data
				}
			};
		case TreeTransfer.SETPLACEHOLDER:
			return { ...state,
				...{
					placeholder: action.data
				}
			};
		default:
			return state;
	}
};
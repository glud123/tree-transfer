import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as TreeTransferData from './reducer';
import thunk from 'redux-thunk';

let store = createStore(
	combineReducers({ ...TreeTransferData }),
	{},
	composeWithDevTools(applyMiddleware(thunk))
);
export default store;
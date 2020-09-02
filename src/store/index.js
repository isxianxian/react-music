import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { applyMiddleware, createStore } from 'redux';
import reducer from './reducer';

let createMyStore = applyMiddleware(thunk, promise)(createStore);
let store = createMyStore(reducer);

export default store;

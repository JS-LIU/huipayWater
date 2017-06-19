

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
let rootReducer = require('../reducers/index');

//applyMiddleware来自redux可以包装 store 的 dispatch
//thunk作用是使action创建函数可以返回一个function代替一个action对象
const createStoreWithMiddleware = applyMiddleware(
    thunk
)(createStore);
function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState)
}

module.exports = configureStore;

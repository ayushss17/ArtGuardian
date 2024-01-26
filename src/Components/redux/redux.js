import React from 'react'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { getProductsReducer } from './reducer/productReducer';

const reducer = combineReducers({
    getProducts: getProductsReducer
})

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;

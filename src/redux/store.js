import { combineReducers, createStore } from "redux";
import productsReducer from './reducers/products_reducer'

const reducers = combineReducers(
    {
        productsData: productsReducer
    });
const store = createStore(reducers);

window.store = store;

export default store;
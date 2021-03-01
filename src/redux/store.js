import { combineReducers } from "redux";
import {products_reducer} from './reducers/products_reducer'

const store = combineReducers(products_reducer)

window.store = store;

export default  store;
import { combineReducers, createStore } from "redux";
import productsReducer from './reducers/products_reducer'

const reducers = combineReducers(
    {
        productsData: productsReducer
    });


const store = createStore(
    reducers, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;

export default store;
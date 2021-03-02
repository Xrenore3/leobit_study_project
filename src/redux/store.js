import { applyMiddleware, combineReducers, createStore } from "redux";
import productsReducer from './reducers/products_reducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./saga/saga";
const reducers = combineReducers(
    {
        productsData: productsReducer
    }
);
const sagaMiddleware = createSagaMiddleware();


const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware), 
    /* preloadedState, */
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
sagaMiddleware.run(rootSaga)

window.store = store;

export default store;
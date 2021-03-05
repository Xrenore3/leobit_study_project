import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import productsReducer from './products/products_reducer'
import filtersReducer from './products_filters/products_filters_reducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./saga/saga";
const reducers = combineReducers(
    {
        productsData: productsReducer,
        filtersData: filtersReducer
    }
);
const sagaMiddleware = createSagaMiddleware();


const store = createStore(
    reducers,
    compose(applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    /* preloadedState, */
);
sagaMiddleware.run(rootSaga)

window.store = store;

export default store;
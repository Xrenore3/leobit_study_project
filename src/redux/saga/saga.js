import axios from 'axios';
import { put, takeEvery, all, takeLatest, select, take } from 'redux-saga/effects';
import { getProductId } from '../products/products.selectors';
import { setAllProductsLoading, getAllProductsSuccess, getSingleProductSuccess, setProductLoading } from '../products/products_action';
import {
    BEGIN_ALL_PRODUCTS_REQUEST,
    BEGIN_PRODUCT_REQUEST
} from './../products/products_types';

const products_url = 'https://course-api.com/react-store-products';
const single_product_url = `https://course-api.com/react-store-single-product?id=`;

function* fetchAllProducts() {
    try {
        yield put(setAllProductsLoading())
        const response = yield axios.get(products_url);
        yield put(getAllProductsSuccess(response.data))

    } catch (error) {
        console.log(error)
    }

}
function* fetchProduct() {
    try {
        yield put(setAllProductsLoading())
        const id = yield select(getProductId)
        const response = yield axios.get(`${single_product_url}${id}`)
        yield put(getSingleProductSuccess(response.data))
    } catch (error) {
        console.log(error)
    }


}

function* watchFetchAllProducts() {
    yield takeEvery(BEGIN_ALL_PRODUCTS_REQUEST, fetchAllProducts)
}
function* watchFetchProduct() {
    yield takeEvery(BEGIN_PRODUCT_REQUEST, fetchProduct)
}


export default function* rootSaga() {
    yield all([watchFetchAllProducts(), watchFetchProduct()])
}

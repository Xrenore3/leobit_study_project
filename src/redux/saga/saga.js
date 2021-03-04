import axios from 'axios';
import { put, takeEvery, all, takeLatest,select,take } from 'redux-saga/effects';
import { userId } from '../selectors/selectors';
import { setAllProductsLoading, getAllProductsSuccess, getSingleProductSuccess, setProductLoading } from '../products/products_action';
import {BEGIN_ALL_PRODUCTS_REQUEST} from './../products/products_types'
const products_url = 'https://course-api.com/react-store-products';
const single_product_url = `https://course-api.com/react-store-single-product?id=`;

function* fetchAllProducts() {
    try {
        const response = yield axios.get(products_url);
        yield put(getAllProductsSuccess(response.data))

    } catch (error) {
        console.log(error)
    } 

}
function* fetchProduct() {
    const id = yield select(userId)
    try {
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
    yield take(setProductLoading, fetchProduct)
}



export default function* rootSaga() {
    yield all([watchFetchAllProducts()])
}

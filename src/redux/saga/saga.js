import axios from 'axios';
import { put, takeEvery, all } from 'redux-saga/effects';
import { setIsLoading, getAllProductsSuccess } from './../actions/products_action';
const products_url = 'https://course-api.com/react-store-products'

function* fetchAllProducts() {
    const response = yield axios.get(products_url);
    yield put(getAllProductsSuccess(response.data))

}
function* watchFetchAllProducts() {
    yield takeEvery(setIsLoading, fetchAllProducts)
}

export default function* rootSaga() {
    yield all([watchFetchAllProducts()])
}

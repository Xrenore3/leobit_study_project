import axios from 'axios';
import { put, takeEvery, all, takeLatest, select, take } from 'redux-saga/effects';
import { getProductId } from '../products/products.selectors';
import { getSingleProductSuccess, setProductLoading } from '../products/products_action';
import { setAllProductsLoading, getAllProductsSuccess } from './../products_filters/products_filters_actions';
import { setAllCompanies, setAllCategories } from './../products_filters/products_filters_actions'
import {
    BEGIN_ALL_PRODUCTS_REQUEST,
    BEGIN_PRODUCT_REQUEST
} from './../products_filters/products_filters_types';

const products_url = 'https://course-api.com/react-store-products';
const single_product_url = `https://course-api.com/react-store-single-product?id=`;



function* fetchAllProducts() {
    try {
        yield put(setAllProductsLoading())
        const response = yield axios.get(products_url)
        const products = yield response.data
        yield put(getAllProductsSuccess(products))
        yield setFilterData(products)
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

// filters 
function* setFilterData(products) {
    const companies = yield products.map(product => product.company)
    const categories = yield products.map(product => product.category)
    yield put(setAllCompanies(new Set(companies)))
    yield put(setAllCategories(new Set(categories)))
}

function* watchFetchAllProducts() {
    yield takeEvery(BEGIN_ALL_PRODUCTS_REQUEST, fetchAllProducts)
    yield takeEvery(BEGIN_PRODUCT_REQUEST, fetchProduct)
}


export default function* rootSaga() {
    yield all([watchFetchAllProducts()])
}

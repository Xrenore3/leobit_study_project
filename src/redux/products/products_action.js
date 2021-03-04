import {
    SET_PRODUCT_LOADING,
    BEGIN_ALL_PRODUCTS_REQUEST,
    GET_SINGLE_PRODUCT_SUCCESS,
    HANDLE_FETCH_ERROR,
    GET_PRODUCTS_SUCCESS,
    SET_ALL_PRODUCTS_LOADING
} from './products_types'


export const setAllProductsLoading = () => ({
    type: SET_ALL_PRODUCTS_LOADING
})
export const getAllProductsSuccess = (products) => ({
    type: GET_PRODUCTS_SUCCESS,
    playload: products
})
export const handleFetchError = (error) => ({
    type: HANDLE_FETCH_ERROR,
    playload: error
})
export const setProductLoading = () => ({
    type: SET_PRODUCT_LOADING

})
export const getSingleProductSuccess = (product) => ({
    type: GET_SINGLE_PRODUCT_SUCCESS,
    playload: product
})
export const getAllProducts = () => ({
    type: BEGIN_ALL_PRODUCTS_REQUEST
})












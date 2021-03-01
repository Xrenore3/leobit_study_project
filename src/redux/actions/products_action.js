export const BEGIN_PRODUCTS_REQUEST = 'BEGIN_PRODUCTS_REQUEST/products'
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS/products'
export const HANDLE_FETCH_ERROR = 'HANDLE_FETCH_ERROR/products'

export const BEGIN_SINGLE_PRODUCT_REQUEST = 'BEGIN_SINGLE_PRODUCT_REQUEST/products'
export const GET_SINGLE_PRODUCT_SUCCESS = 'GET_SINGLE_PRODUCT_SUCCESS/products'

export const getAllProductsSuccessAC = (products) => ({
    type: GET_PRODUCTS_SUCCESS,
    playload: products
})
export const beginProductsRequestAC = () => ({
    type: BEGIN_PRODUCTS_REQUEST
})
export const handleFetchErrorAC = (error) => ({
    type: HANDLE_FETCH_ERROR,
    playload: error
})
export const getSingleProductSuccessAC = (product) => ({
    type: GET_SINGLE_PRODUCT_SUCCESS,
    playload: product
})









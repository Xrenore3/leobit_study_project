export const BEGIN_ALL_PRODUCTS_REQUEST = 'GET_ALL_PRODUCT_REQUESTS/products'
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS/products'
export const HANDLE_FETCH_ERROR = 'HANDLE_FETCH_ERROR/products'

export const getAllProductsSuccessAC = (products) => ({
    type: GET_PRODUCTS_SUCCESS,
    playload: products
})
export const beginAllProductsRequestAC = () => ({
    type: BEGIN_ALL_PRODUCTS_REQUEST
})
export const handleFetchErrorAC = (error) => ({
    type: HANDLE_FETCH_ERROR,
    playload: error
})









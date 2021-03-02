export const SET_IS_LOADING = 'SET_IS_LOADING/products'
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS/products'
export const HANDLE_FETCH_ERROR = 'HANDLE_FETCH_ERROR/products'
export const GET_SINGLE_PRODUCT_SUCCESS = 'GET_SINGLE_PRODUCT_SUCCESS/products'



export const setIsLoading = () => ({
    type: SET_IS_LOADING
})
export const getAllProductsSuccess = (products) => ({
    type: GET_PRODUCTS_SUCCESS,
    playload: products
})
export const handleFetchError = (error) => ({
    type: HANDLE_FETCH_ERROR,
    playload: error
})
export const getSingleProductSuccess = (product) => ({
    type: GET_SINGLE_PRODUCT_SUCCESS,
    playload: product
})










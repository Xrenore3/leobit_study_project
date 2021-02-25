export const GET_ALL_PRODUCTS_REQUEST = 'GET_ALL_PRODUCT_REQUESTS/products'
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS/products'


export const getAllProductsSuccessAC = (products) => ({
    type: GET_PRODUCTS_SUCCESS,
    playload: products
})
export const getAllProductsRequestAC = () => ({
    type: GET_ALL_PRODUCTS_REQUEST
})









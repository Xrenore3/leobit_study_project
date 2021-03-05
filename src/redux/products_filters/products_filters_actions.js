import {
    SET_ALL_COMPANIES,
    SET_ALL_CATEGORIES,
    GET_PRODUCTS_SUCCESS,
    SET_ALL_PRODUCTS_LOADING,
    BEGIN_ALL_PRODUCTS_REQUEST,
    BEGIN_PRODUCT_REQUEST

} from './products_filters_types'

export const setAllProductsLoading = () => ({
    type: SET_ALL_PRODUCTS_LOADING
})
export const getAllProductsSuccess = (products) => ({
    type: GET_PRODUCTS_SUCCESS,
    playload: products
})

export const setAllCompanies = (companies) => ({
    type: SET_ALL_COMPANIES,
    companies
})
export const setAllCategories = (categories) => ({
    type: SET_ALL_CATEGORIES,
    categories
})

//saga actions
export const getAllProducts = () => ({
    type: BEGIN_ALL_PRODUCTS_REQUEST
})

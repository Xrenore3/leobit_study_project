import { GET_PRODUCTS_SUCCESS, BEGIN_PRODUCTS_REQUEST, HANDLE_FETCH_ERROR, GET_SINGLE_PRODUCT_SUCCESS } from './../action/products_action';

const products_reducer = (state, action) => {
    switch (action.type) {
        case GET_PRODUCTS_SUCCESS: {
            return { ...state, allProducts: action.playload, allProductsLoading: false }
        }
        case BEGIN_PRODUCTS_REQUEST: {
            return { ...state, allProductsLoading: true }
        }
        case HANDLE_FETCH_ERROR: {
            return { ...state, error: action.playload }
        }
        case GET_SINGLE_PRODUCT_SUCCESS: {
            return { ...state, singleProduct: action.playload, allProductsLoading: false }
        }
        default:
            return state;
    }
}

export default products_reducer
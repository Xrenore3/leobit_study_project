import { GET_PRODUCTS_SUCCESS, BEGIN_ALL_PRODUCTS_REQUEST, HANDLE_FETCH_ERROR } from './../context/action/products_action';

const products_reducer = (state, action) => {
    switch (action.type) {
        case GET_PRODUCTS_SUCCESS: {
            return { ...state, allProducts: action.playload, allProductsLoading: false }
        }
        case BEGIN_ALL_PRODUCTS_REQUEST: {
            return { ...state, allProductsLoading: true }
        }
        case HANDLE_FETCH_ERROR: {
            return { ...state, error: action.playload }
        }
        default:
            return state;
    }
}

export default products_reducer
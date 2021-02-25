import { GET_PRODUCTS_SUCCESS, GET_ALL_PRODUCTS_REQUEST } from './../context/action/products_action';

const products_reducer = (state, action) => {
    switch (action.type) {
        case GET_PRODUCTS_SUCCESS: {
            return { ...state, allProducts: action.playload, allProductsLoading: false }
        }
        case GET_ALL_PRODUCTS_REQUEST: {
            return { ...state, allProductsLoading: true }
        }
        default:
            return state;
    }
}

export default products_reducer
import { GET_PRODUCTS_SUCCESS, SET_IS_LOADING, HANDLE_FETCH_ERROR, GET_SINGLE_PRODUCT_SUCCESS } from './../actions/products_action';

const initialState = {
    allProducts: [],
    allProductsLoading: false,
    singleProduct: {},
    error: ''
};

const products_reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_SUCCESS: {
            return { ...state, allProducts: action.playload, allProductsLoading: false }
        }
        case SET_IS_LOADING: {
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
import {
    SET_PRODUCT_LOADING,
    GET_SINGLE_PRODUCT_SUCCESS,
    HANDLE_FETCH_ERROR,
    SET_PRODUCT_ID
} from './products_types'
const initialState = {
    singleProduct: {},
    singleProductLoading: false,
    error: '',
    productId: ''
};

const products_reducer = (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_FETCH_ERROR: {
            return { ...state, error: action.playload }
        }
        case GET_SINGLE_PRODUCT_SUCCESS: {
            return { ...state, singleProduct: action.playload, allProductsLoading: false }
        }
        case SET_PRODUCT_LOADING: {
            return { ...state, singleProductLoading: true }
        }
        case SET_PRODUCT_ID: {
            return {...state, productId: action.id}
        }
        default:
            return state;
    }
}




export default products_reducer
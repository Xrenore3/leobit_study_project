import {
    SET_PRODUCT_LOADING,
    GET_SINGLE_PRODUCT_SUCCESS,
    HANDLE_FETCH_ERROR,
    GET_PRODUCTS_SUCCESS,
    SET_ALL_PRODUCTS_LOADING
} from './products_types'
import products from '../../assets/products_mock_data';
import product from '../../assets/single_product_mock_data'
const initialState = {
    allProducts: [],
    allProductsLoading: false,
    singleProduct: { ...product },
    singleProductLoading: false,
    error: '',
    id: 'rec1Ntk7siEEW9ha1'
};

const products_reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_SUCCESS: {
            return { ...state, allProducts: action.playload, allProductsLoading: false }
        }
        case SET_ALL_PRODUCTS_LOADING: {
            return { ...state, allProductsLoading: true }
        }
        case HANDLE_FETCH_ERROR: {
            return { ...state, error: action.playload }
        }
        case GET_SINGLE_PRODUCT_SUCCESS: {
            return { ...state, singleProduct: action.playload, singleProductLoading: false }
        }
        case SET_PRODUCT_LOADING: {
            return { ...state, singleProductLoading: true }
        }
        default:
            return state;
    }
}




export default products_reducer
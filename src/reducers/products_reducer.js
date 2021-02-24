import { GET_PRODUCTS } from './../context/action/products_action';

const products_reducer = (state, action) => {
    switch (action.type) {
        case GET_PRODUCTS: {
            return { ...state, allProducts: action.playload }
        }
        default:
            return state;
    }
}

export default products_reducer
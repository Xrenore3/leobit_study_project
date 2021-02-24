import { GET_ALL_PRODUCTS } from './../context/action/products_action';

const products_reducer = (state, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS: {
            return {...state, data:[1,2,3,4,5,6]}
        }


        default:
            return state;
    }
}

export default products_reducer
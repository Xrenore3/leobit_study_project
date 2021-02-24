import { createContext, useContext, useEffect, useReducer } from "react";
import products_reducer from '../../reducers/products_reducer';
import { getAllProductsAC } from './action/products_action'



const ProductsContext = createContext();

const initialState = {
    data: [],
    boolean: true
};

export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(products_reducer, initialState);
    useEffect(() => {
        console.log('effect')
        dispatch(getAllProductsAC())
    })

    return (
        <ProductsContext.Provider value={{ ...state }}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => {
    return useContext(ProductsContext)
}
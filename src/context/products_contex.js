import axios from "axios"
import { createContext, useContext, useEffect, useReducer } from "react"
import products_reducer from '../reducers/products_reducer'
import { getAllProductsSuccessAC, beginAllProductsRequestAC, handleFetchErrorAC } from './action/products_action'
const products_url = 'https://course-api.com/react-store-products'

const single_product_url = `https://course-api.com/react-store-single-product?id=`


const ProductsContext = createContext();

const initialState = {
    allProducts: [],
    allProductsLoading: false,
    error:''
};

export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(products_reducer, initialState);

    const beginProductsRequest = () => dispatch(beginAllProductsRequestAC());
    const fetchAllProducts = async (url) => {
        beginProductsRequest()
        try {
            const response = await axios.get(url);
            dispatch(getAllProductsSuccessAC(response.data));
        } catch (error) {
            console.log(error)
            dispatch(handleFetchErrorAC(error))
        }

    }

    useEffect(() => {
        fetchAllProducts(products_url)
    }, [])

    return (
        <ProductsContext.Provider value={{ ...state }}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => {
    return useContext(ProductsContext)
}
import axios from "axios"
import { createContext, useContext, useEffect, useReducer } from "react"
import products_reducer from './reducers/products_reducer'
import { getAllProductsSuccessAC, beginProductsRequestAC, handleFetchErrorAC, getSingleProductSuccessAC } from './action/products_action'
const products_url = 'https://course-api.com/react-store-products'



const ProductsContext = createContext();

const initialState = {
    allProducts: [],
    allProductsLoading: false,
    singleProduct: {},
    singleProductLoading: false,
    error: ''
};

export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(products_reducer, initialState);

    const beginProductsRequest = () => dispatch(beginProductsRequestAC());
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


    const fetchSingleProducts = async (url) => {
        beginProductsRequest()
        try {
            const response = await axios.get(url);
            dispatch(getSingleProductSuccessAC(response.data));

        } catch (error) {
            console.log(error)
            dispatch(handleFetchErrorAC(error))
        }
    }


    useEffect(() => {
        fetchAllProducts(products_url)
    }, [])

    return (
        <ProductsContext.Provider value={{ ...state, fetchSingleProducts }}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => {
    return useContext(ProductsContext)
}
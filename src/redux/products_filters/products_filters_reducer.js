import {
    SET_ALL_COMPANIES,
    SET_ALL_CATEGORIES,
    GET_PRODUCTS_SUCCESS,
    SET_ALL_PRODUCTS_LOADING,
    SET_FILTER_BY_COMPANY
} from './products_filters_types'


const initialState = {
    allProducts: [],
    filtredProducts: [],
    allProductsLoading: false,
    companies: [],
    categories: [],
    filteredCompany: '',
    filterredCategory: ''
}

const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_SUCCESS: {
            return { ...state, allProducts: action.playload, filtredProducts: action.playload, allProductsLoading: false }
        }
        case SET_ALL_PRODUCTS_LOADING: {
            return { ...state, allProductsLoading: true }
        }
        case SET_ALL_COMPANIES: {
            return { ...state, companies: [...action.companies] }
        }
        case SET_ALL_CATEGORIES: {
            return { ...state, categories: [...action.categories] }
        }
        case SET_FILTER_BY_COMPANY: {
            let newFiltredProducts = [];
            if (action.company === 'all') {
                newFiltredProducts = state.allProducts
            } else {
                newFiltredProducts = [...state.allProducts.filter(product => product.company === action.company)]
            }
            return {
                ...state, filtredProducts: [...newFiltredProducts],
                filteredCompany: action.company
            }
        }
        default: {
            return state
        }
    }

}
export default filtersReducer
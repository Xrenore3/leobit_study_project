import {
    SET_ALL_COMPANIES,
    SET_ALL_CATEGORIES
} from './products_filters_types'


const initialState = {
    companies: [],
    categories: []

}

const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL_COMPANIES: {
            return { ...state, companies: [...action.companies] }
        }
        case SET_ALL_CATEGORIES: {
            return { ...state, categories: [...action.categories] }
        }
        default: {
            return state
        }
    }

}
export default filtersReducer
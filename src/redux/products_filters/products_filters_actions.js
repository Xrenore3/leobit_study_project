import {
    SET_ALL_COMPANIES,
    SET_ALL_CATEGORIES
} from './products_filters_types'

export const setAllCompanies = (companies) => ({
    type: SET_ALL_COMPANIES,
    companies
})
export const setAllCategories = (categories) => ({
    type: SET_ALL_CATEGORIES,
    categories
})
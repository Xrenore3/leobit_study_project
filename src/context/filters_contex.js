import { createContext } from "react";


const FiltersContex = createContext();

const initialState = {
    products: [],
    allTypes: [],

}

export const FilterProvider = ({children}) => {

    return (
        <FilterProvider.Provider>
            {children}
        </FilterProvider.Provider>
    )
}
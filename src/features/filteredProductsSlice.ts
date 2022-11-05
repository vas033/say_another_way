import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store/store";
import { Product } from "./productsSlice";

interface IMyInitialSearchState {
        filteredArr: Product[]
}

const initialState:IMyInitialSearchState = {
        filteredArr: []
}

const filteredProductsSlice = createSlice({
        name: 'search',
        initialState,
        reducers: {
                getValue: (state, action) => {
                        state.filteredArr = action.payload;
                }
        }
});

export default filteredProductsSlice.reducer;
export const { getValue } = filteredProductsSlice.actions; 
export const searchResults = (state:RootState) => state.search.filteredArr;

import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store/store";
import { Product } from "./productsSlice";

interface IMyInitialSearchState {
        filteredArr: Product[]
        len: number 
}

const initialState:IMyInitialSearchState = {
        filteredArr: [],
        len: 0
}

const filteredProductsSlice = createSlice({
        name: 'search',
        initialState,
        reducers: {
                getValue: (state, action) => {
                        state.filteredArr = action.payload;
                        state.len = state.filteredArr.length;
                }
        }
});

export default filteredProductsSlice.reducer;
export const { getValue } = filteredProductsSlice.actions; 
// export const searchResults = (state:RootState) => state.search.filteredArr;
// export const filterResults = (state:RootState) => state.search.len;

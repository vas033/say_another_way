import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface MyInitialSearch {
        filter: string
}

const initialState: MyInitialSearch = {filter: ''}

const searchString = createSlice({
        name: 'searchString',
        initialState,
        reducers: {
                getValue: (state, action) => {
                        state.filter = action.payload;
                }
        }
});

export default searchString.reducer;
export const { getValue } = searchString.actions; 
export const searchStringValue = (state:RootState) => state.searchStr.filter;
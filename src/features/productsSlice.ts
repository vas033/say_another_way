import { AsyncThunk, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store/store";

export declare type Product = {
        id: number, 
        title: string,
        price: number,
        description: string,
        category: string,
        image: string,
        rating: {[key:string]: number}
}

interface IMyState {
        products: Array<Product>,
        status: string,
        error: null,
        count: number  
}

const initialState: IMyState = {
        products: [],
        status: 'idle',
        error: null,
        count: 0
}

const productsSlice = createSlice({
        name: 'Products',
        initialState,
        reducers: {
                productsUpdated(state, action) {
                        const products = action.payload;
                }
        },
        extraReducers(builder) {
                builder
                  .addCase(fetchProducts.pending, (state, action) => {
                    state.status = 'loading'
                  })
                  .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product>) => {
                    state.status = 'succeeded'
                    // Add any fetched posts to the array
                    state.products = state.products.concat(action.payload)
                    state.count = state.products.length
                  })
                  .addCase(fetchProducts.rejected, (state, action) => {
                    state.status = 'failed'
                  })
              }
})

export const productsStatus = (state: RootState) => state.products.status;
export const productsCount = (state: RootState) => state.products.count;
export const product = (state: RootState) => state.products.products;

export default productsSlice.reducer;

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        return data;
})
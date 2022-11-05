import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productsSlice";
import searchReducer from "../features/filteredProductsSlice";

const store = configureStore({
        reducer: {
                products: productsReducer,
                search: searchReducer
        }
});

export default store;

// берем типы для диспатча и стора
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productsSlice";
import searchStrReducer from "../features/searchString";

const store = configureStore({
        reducer: {
                products: productsReducer,
                searchStr: searchStrReducer
        }
});

export default store;

// берем типы для диспатча и стора
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
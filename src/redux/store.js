import { configureStore } from "@reduxjs/toolkit";
import  bookDetail  from "./slices/booksDetailSlice";

export const store = configureStore({
    reducer: {
        books: bookDetail,       
    }
})
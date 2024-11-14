import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productslice";

const store = configureStore({
    reducer:{
        products:productReducer
    }
})


export default store;
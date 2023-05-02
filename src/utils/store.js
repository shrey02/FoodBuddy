import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";

const store = configureStore({
    reducer:{
        dataUrl : dataSlice,
    }
});

export default store;
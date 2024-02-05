import { configureStore } from "@reduxjs/toolkit";
import Homeslice from "./Homeslice"
import AuthSlice from "./AuthSlice";
import BlogSlice from "./BlogSlice";
export const store=configureStore({
    reducer:{
        Hom:Homeslice.reducer,
        Aut:AuthSlice.reducer,
        Blo:BlogSlice.reducer,
    },
});
import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../features/CounterSilce";


export const store = configureStore({
    reducer:{
        counter: CounterReducer,
    }
})


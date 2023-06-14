import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../features/CounterSilce";
import UserSilce from "../features/UserSilce";


export const store = configureStore({
    reducer:{   
        counter: CounterReducer,
        user:UserSilce,
    }
})


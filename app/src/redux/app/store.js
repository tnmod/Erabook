import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../features/CounterSilce";
import UserSilce from "../features/UserSilce";
import DialogSilce from "../features/DialogSilce";
import navigatorSilce from "../features/navigatorSilce";
import OTPCodeSilce from "../features/OTPCodeSilce";


export const store = configureStore({
    reducer: {
        counter: CounterReducer,
        user: UserSilce,
        dialog: DialogSilce,
        navigator: navigatorSilce,
        otpcode: OTPCodeSilce
    }
})


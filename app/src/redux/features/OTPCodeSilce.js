import { createSlice } from '@reduxjs/toolkit';

const otpCodeSlice = createSlice({
    name: 'otpcode',
    initialState: {
        code: [-1, -1, -1, -1, -1, -1],
        email: null,
        status: false
    },
    reducers: {
        changeCode(state, action) {
            const { index, value } = action.payload;
            state.code[index] = value;
        },
        successOTP(state, action) {
            state.status = true;
        },
        addEmailOTP(state, action) {
            state.email = action.payload;
        },
        removeCode(state) {
            state.code = [-1, -1, -1, -1, -1, -1];
            state.status = false;
            state.email = null;
        },

    },
});

export const { changeCode, removeCode, successOTP, addEmailOTP } = otpCodeSlice.actions;

export default otpCodeSlice.reducer;
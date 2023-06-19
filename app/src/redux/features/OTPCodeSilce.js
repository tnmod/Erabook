import { createSlice } from '@reduxjs/toolkit';

const otpCodeSlice = createSlice({
    name: 'otpcode',
    initialState: {
        code: [-1, -1, -1, -1, -1, -1],
    },
    reducers: {
        changeCode(state, action) {
            const { index, value } = action.payload;
            state.code[index] = value;
        },
        removeCode(state) {
            state.code = [-1, -1, -1, -1, -1, -1];
        },

    },
});

export const { changeCode, removeCode } = otpCodeSlice.actions;

export default otpCodeSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        loading: false,
        error: null,
    },
    reducers: {
        loginStart(state) {
            state.loading = true;
            state.error = null;
        },
        loginSuccess(state, action) {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        loginFailure(state) {
            state.loading = false;
        },
        logoutSuccess(state) {
            state.loading = false;
            state.currentUser = null;
        }
    },
});

export const { loginStart, loginSuccess, loginFailure, logoutSuccess } = userSlice.actions;

export default userSlice.reducer;
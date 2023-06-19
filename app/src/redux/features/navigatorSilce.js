import { createSlice } from '@reduxjs/toolkit';

const navigatorSlice = createSlice({
    name: 'navigation',
    initialState: {
        routeName: null,
    },
    reducers: {
        changeRouteName(state, action) {
            state.routeName = action.payload;
        },
        removeRouteName(state) {
            state.routeName = null;
        },

    },
});

export const { changeRouteName, removeRouteName } = navigatorSlice.actions;

export default navigatorSlice.reducer;
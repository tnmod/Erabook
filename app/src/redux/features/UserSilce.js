import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
    },
    reducers: {
        addUserData(state, action) {
            state.currentUser = action.payload;
            state.content = action.payload;
        },
        removeUserData(state) {
            state.currentUser = null;
            state.content = null;
        },
       
    },
});

export const { addUserData, removeUserData} = userSlice.actions;

export default userSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const dialogSilce = createSlice({
    name: 'dialog',
    initialState: {
        visiable: false,
        title: null,
        content: null,
        buttontext: null,
        actionType: 0,
        choose: 0,
    },
    reducers: {
        openDialog(state, action) {
            state.visiable = true;
            const { choose, title, content, buttontext, actionType } = action.payload;
            state.choose = choose ? choose : 0;
            state.title = title ? title : '';
            state.buttontext = buttontext ? buttontext : '';
            state.content = content ? content : '';
            state.actionType = actionType ? actionType : 0;
        },
        closeDialog(state) {
            state.visiable = false;
            state.choose = null;
            state.title = null;
            state.content = null;
            state.buttontext = null;
        },
        resetAction(state) {
            state.actionType = 0;
        }
    },

})
export const { closeDialog, openDialog, resetAction } = dialogSilce.actions;

export default dialogSilce.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    boards:[]
}

const boardSlice = createSlice({
    name:'createBoardName',
    initialState,
    reducers:{
        create: (state=initialState, action) => {
            state.boards.push(action.payload.name)
        }
    }
});

export default boardSlice.reducer;
export const TrelloBoardActions = boardSlice.actions;
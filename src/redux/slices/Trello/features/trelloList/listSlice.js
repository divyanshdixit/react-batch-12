import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lists: []
}

const listSlice = createSlice({
    name:'createList',
    initialState,
    reducers:{
        create: (state = initialState, action) => {
            state.lists.push(action.payload.name)
        }
    }
})

export default listSlice.reducer;
export const TrelloListActions = listSlice.actions;
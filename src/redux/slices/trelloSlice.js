// slice the application state in small pieces.
// generate the actions, reducers

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list:[],
    card:[]
}

// createSlice() function automatic creates the action creator with the same name of reducers property
// return the main reducer function which we can provide to redux store.

const trelloSlice = createSlice({
    // 3 props:
    name:'trello', // name of the slice
    initialState,
    // now add the reducer props: this is the object , in which we use write the state transition
    reducers:{
        created: (state, action) => {
            // we dont have to return the state, and we an mutate the state direclty
            state.list = ['new value']
        }
    }

})

// export reducer and namedActions 
export default trelloSlice.reducer;
export const trelloActions = trelloSlice.actions;
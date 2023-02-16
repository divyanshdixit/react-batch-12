import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cards: []
}

const cardSlice = createSlice({
    name:'createCard',
    initialState,
    reducers:{
        create: (state= initialState, action) => {
            state.cards.push(action.payload.cardDetails)
        }
    }
})

export default cardSlice.reducer;
export const TrelloCardActions = cardSlice.actions;
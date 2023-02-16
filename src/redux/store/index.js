import { configureStore } from "@reduxjs/toolkit";
import TrelloSliceReducer, {trelloActions} from "../slices/trelloSlice";
import TrelloBoardSliceReducer, {TrelloBoardActions} from "../slices/Trello/features/trelloBoard/boardSlice";
import TrelloListSliceReducer, {TrelloListActions} from "../slices/Trello/features/trelloList/listSlice";
import TrelloCardSliceReducer, {TrelloCardActions} from "../slices/Trello/features/trelloCard/cardSlice";

const store = configureStore({
    reducer:{
        trello: TrelloSliceReducer,
        trelloBoard: TrelloBoardSliceReducer,
        trelloList: TrelloListSliceReducer,
        trelloCard: TrelloCardSliceReducer

    }
})

// store.dispatch(cakeActions.created())
export default store; 
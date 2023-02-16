import React, {useState} from 'react'
import DialogModal from '../../ui/dialog';
import store from "../../../redux/store";
import { useSelector } from "react-redux";
import { TrelloListActions } from "../../../redux/slices/Trello/features/trelloList/listSlice";


function TrelloList({ boardName, open, handleClose, handleOpen }) {

    const [showInputList, setShowInputList] = useState(false);
  const trelloListSelector = useSelector((state) => state.trelloList.lists);
  console.log(trelloListSelector);

  const [name, setName] = useState("");

    const addList = () => {
        setShowInputList(true);
        setName();
      };
    
      const handleListNameChange = (e) => {
        setName(e.target.value);
      };
    
      const createList = (e) => {
        setShowInputList(false);
        console.log('list', name)
        store.dispatch(TrelloListActions.create({ name }));
        setName("");
      };
    
      const closeList = () => {
        setShowInputList(false);
      };

  return (

    <DialogModal
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        boardName={boardName}
        list
        addButton={addList}
        inputValue={name}
        closeButton={closeList}
        createButton={createList}
        handleDataChange={handleListNameChange}
        showInput={showInputList}
        trelloData={trelloListSelector}
    />
  )
}

export default TrelloList
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import BasicInput from "../input";
import MediaCard from "../card";
import store from "../../../redux/store";
import { TrelloListActions } from "../../../redux/slices/Trello/features/trelloList/listSlice";
import { useSelector } from "react-redux";
import InputButtonGrp from "../inputButtonGrp";
import ContentBox from "./dialogContent";

function DialogModal({ boardName, open, handleClose, handleOpen, list, addButton, inputValue, closeButton, createButton, handleDataChange, showInput, trelloData}) {
  const [showInputList, setShowInputList] = useState(false);
  const trelloListSelector = useSelector((state) => state.trelloList.lists);
  console.log(trelloListSelector);

  const [name, setName] = useState("");

//   const addList = () => {
//     setShowInputList(true);
//     setName();
//   };

//   const handleListNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const createList = (e) => {
//     setShowInputList(false);
//     store.dispatch(TrelloListActions.create({ name }));
//     setName("");
//   };

//   const closeList = () => {
//     setShowInputList(false);
//   };

  return (
    <Dialog
      open={open}
      fullWidth={true}
      maxWidth={`xl`}
      onClose={handleClose}
      scroll={`paper`}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title">{boardName}</DialogTitle>
      <DialogContent dividers="paper">
        <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
          <ContentBox 
          handleOpen={handleOpen}
            showInput={showInput}
            inputValue={inputValue}
            handleDataChange={handleDataChange}
            createButton={createButton}
            closeButton={closeButton}
            trelloData={trelloData}
            addButton={addButton}
            list
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogModal;

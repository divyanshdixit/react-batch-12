import React, { useState } from "react";
import DialogModal from "../../ui/dialog";
import store from "../../../redux/store";
import { useSelector } from "react-redux";
import { TrelloCardActions } from "../../../redux/slices/Trello/features/trelloCard/cardSlice";
import InputButtonGrp from "../../ui/inputButtonGrp";
import { Button } from "@mui/material";
import BasicModal from "../../ui/modal";
import MediaCard from "../../ui/card";

function TrelloCard({ name }) {
  // const [open, setOpen] = useState(false);

  // const [showInputCard, setShowInputCard] = useState(false);
  const trelloCardSelector = useSelector((state) => state.trelloCard.cards);
  console.log(trelloCardSelector);


  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  // const addCard = () => {
  //   console.log("first");
  //   setShowInputCard(true);
  // };

  // const handleCardNameChange = (e) => {
  //   setCardDetails((prev) => {
  //     return {
  //       ...prev,
  //       [e.target.name]: e.target.value,
  //     };
  //   });
  // };

  // const createCard = (e) => {
  //   setShowInputCard(false);
  //   store.dispatch(TrelloCardActions.create({ cardDetails }));
  //   setCardDetails({ name: "", description: "", file: "" });
  // };

  // const closeCard = () => {
  //   setShowInputCard(false);
  // };

  return (
    <MediaCard
      // open={open}
      // handleOpen={handleOpen}
      // addButton={addCard}
      listName={name}
      // inputValue={cardDetails}
      // closeButton={closeCard}
      // createButton={createCard}
      // handleDataChange={handleCardNameChange}
      // showInput={showInput}
      // trelloData={trelloListSelector}
    />
  );
}

export default TrelloCard;

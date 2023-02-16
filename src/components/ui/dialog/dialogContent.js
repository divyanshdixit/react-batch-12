import React from 'react'
import MediaCard from "../card";
import InputButtonGrp from "../inputButtonGrp";
import Button from "@mui/material/Button";
import TrelloCard from '../../Trello/TrelloCard';

function ContentBox({showInput, inputValue, handleDataChange, createButton, closeButton, trelloData, addButton, list, handleOpen }) {
  return (
    <>
        {showInput ? (
            <>
            <InputButtonGrp
                data={inputValue}
                handleChange={handleDataChange}
                createButton={createButton}
                list
                closeButton={closeButton}
            />
            </>
          ) : (
            <>
              {/* show the created list here */}
              {trelloData.length &&
                trelloData.map((list, id) => (
                  <>
                    <TrelloCard name={list} handleOpen={(id) => handleOpen(id)} showInput={showInput}/>
                  </>
                ))}
              <Button onClick={addButton} variant="contained">
                {" "}
                Add a {list ? `List` : `Card`}
              </Button>
            </>
          )}
    </>
  )
}

export default ContentBox
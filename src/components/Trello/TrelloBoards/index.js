import React, {useState} from 'react'
import {useSelector} from 'react-redux';
import Modal from '../../ui/dialog';
import { Button } from '@mui/material';
import TrelloList from '../TrelloList';


function TrelloBoard() {
  const trelloBoard = useSelector((state) => state.trelloBoard.boards);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <>
    {
      (trelloBoard.length > 0) ?
      <div>
        {
          trelloBoard.map((board, i) => (
            <>
              <Button variant='contained' onClick={() => handleOpen(i)}> {board} </Button>
              <TrelloList boardName={board} open={open} handleClose={handleClose} handleOpen={handleOpen} />
            </>
          ))
        }
      </div>
      :
      <span> Can not find any board name </span>
    }
    </>
  )
}

export default TrelloBoard
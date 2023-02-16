import React, { useEffect, useRef, useState } from 'react';
import TrelloBoard from './TrelloBoards';
import { TrelloBoardActions } from '../../redux/slices/Trello/features/trelloBoard/boardSlice'; 
import store from '../../redux/store';
import { useParams } from 'react-router-dom';

function Trello() {
    const {category} = useParams();
    console.log(category)
    const [boardName, setBoardName] = useState('');
    const [boardNameArr, setBoardNameArr] = useState([]);

    const trelloBoardName = (e) => {
        setBoardName(e.target.value);
    }

    const createBoard = (e) => {
        e.preventDefault();
        setBoardNameArr(prev => [...prev, boardName])
        store.dispatch(TrelloBoardActions.create({name:boardName}))
        localStorage.setItem('boardName', JSON.stringify(Object.assign({},[boardName])));
    }

  return (
    <>
    <h1> Currently viewing - {category} - page</h1>
    {console.log(boardNameArr)}
        {
            (!boardNameArr.length) ? (
                <>
                    <input type="text" name="boardname" value={boardName} onChange={trelloBoardName} />
                    <button type='submit' onClick={createBoard}> Create Board </button>
                </>
            )
            :
            <TrelloBoard/>
        }
    </>
  )
}

export default Trello
import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import BasicInput from '../input';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TrelloCardActions } from '../../../redux/slices/Trello/features/trelloCard/cardSlice';
import store from '../../../redux/store';
import { useSelector } from 'react-redux';
import InputButtonGrp from '../inputButtonGrp';
import BasicModal from '../modal';

export default function MediaCard({listName}) {
  const [showInputCard, setShowInputCard] = useState(false);
  const trelloCardSelector = useSelector((state) => state.trelloCard.cards);
  const trelloListSelector = useSelector((state) => state.trelloList.lists);
  const [cardDetails, setCardDetails] = useState({
    name: "",
    description: "",
    file: "",
    listName:''
  });

  const [open, setOpen] = useState({itm:-1, show:false});
  const [showCardForList, setShowCardForList] = useState(null);

  console.log(trelloCardSelector, trelloListSelector)

  const addCard = (forList) =>{
    console.log('-card', forList)
    setShowCardForList(forList)
    setShowInputCard(true)
  }

  const handleCardNameChange = (e) => {
    console.log(e)
    setCardDetails((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
        listName: showCardForList
      };
    });
  };

  const createCard = (e) =>{
    setShowInputCard(false);
    store.dispatch(TrelloCardActions.create({cardDetails}));
    setCardDetails({
      name: "",
    description: "",
    file: "",
    listName:''
    })
  }

  const closeCard = () =>{
    setShowInputCard(false)
  }

  const handleOpenModal = (i) => {
    setOpen(prev => {
      return {
        ...prev,
        itm: i,
        show: true
      }
    });
  }
  const handleClose = () => {
    setOpen(prev => {
      return {
        ...prev,
        itm: -1,
        show: false
      }
    });
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {listName}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      <CardActions>
      {
        (showInputCard) ?
          (
            <>
            <InputButtonGrp
                listName={showCardForList}
                data={cardDetails}
                handleChange={handleCardNameChange}
                createButton={createCard}
                closeButton={closeCard}
            />

                {/* <BasicInput name={cardName} handleChange={handleCardNameChange}/>
                <Button onClick={createCard}  variant="contained" color='success'> Add Card</Button>
                <Button onClick={closeCard}  variant="contained"  color='warning'> X </Button> */}
            </>
          ) 
            :
            (
                <>
                {/* show the created list here */}
                {
                    trelloCardSelector.length ? trelloCardSelector.map((card, i) => (
                        <>
                          {(listName === card.listName) ? (
                            <>
                              <Button variant='contained' onClick={() => handleOpenModal(i)}> {card.name} </Button>
                              <BasicModal cardDetails={card} i={i} open={open} handleClose={handleClose}/>
                            </>
                          )
                          :
                          null
                          }
                        </>
                        
                    ))
                    :
                    null
                }
                <Button size="small" onClick={() => addCard(listName)}>+ Add a Card</Button>
                </>
            )
            }
      </CardActions>
    </Card>
  );
}
import React from 'react'
import Input from '@mui/material/Input';

function BasicInput({nameAtr, name, handleChange, list, placeholder}) {
  console.log(handleChange)
  return (
        <Input
            placeholder={placeholder}
            name={nameAtr}
            id={`${list ? 'list_title' : 'card_title'}`}
            value={name}
            onChange={(e) => handleChange(e)} 
        />
  )
}

export default BasicInput
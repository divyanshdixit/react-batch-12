import React from 'react'
import { useRef } from 'react'

const Input = ({type, placeholder}) => {
    const inputRef = useRef();
  return (
    <>
        <input type={type} ref={inputRef}/>
    </>
  )
}

export default Input
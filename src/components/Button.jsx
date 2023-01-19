import React from 'react'

const Button = ({type, handleClick, children}) => {
    console.log('Button', children)
  return (
    <>
        <button type={type} onClick={handleClick}> { children } </button>
    </>
  )
}

export default React.memo(Button)
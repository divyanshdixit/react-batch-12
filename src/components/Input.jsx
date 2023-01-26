import React from 'react'

const Input = React.forwardRef(({name, type}, ref) => {
    return (
        <>
        <input name={name} type={type} ref={ref}/>
        <h1></h1>
        <button></button>
      </>
    )
  })

export default Input
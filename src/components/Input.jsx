import React from 'react'

const Input = React.forwardRef((props, ref) => {
    return (
        <>
        <input type="text" ref={ref}/>
        <h1></h1>
        <button></button>
      </>
    )
  })

export default Input
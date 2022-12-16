// using refs we can access DOM  nodes directly within react.

// create ref: inputref
// <input type="text" ref={inputref}
// inputref.current.focus()

import React, {useRef} from 'react'

function Refs() {
    const inputRef = useRef();

  return (
    <>
        <input type="text" ref={inputRef}/>
        <button type="button" onClick={() => {console.log(inputRef); inputRef.current.focus()}}>Click </button> 
    </>
  )
}

export default Refs
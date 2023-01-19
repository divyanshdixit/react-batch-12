// using refs we can access DOM  nodes directly within react.
// can be used to save any mutable value

// create ref: inputref
// <input type="text" ref={inputref}
// inputref.current.focus()
// event.target.attribites
import React, {useRef} from 'react'
import Input from './Input';

const ff = React.forwardRef(() => {});

function Refs() {
  
    const inputRef = useRef(); // null (object)=== undefined (undefined)
    const buttonRef = useRef();
    const newRef = useRef(10);
    
    console.log(inputRef.current)

  return (
    <>
        
        <Input type="text" ref={inputRef} placeholder={'placeholder'} />
        {/* <button type="button" ref={buttonRef} onClick={() => {console.log(inputRef); inputRef.current.focus()}}>Click </button>  */}
    </>
  )
}

export default React.forwardRef(Refs)
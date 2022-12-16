import React,{useContext} from 'react'
import {uContext} from './Parent';

function Children3() {
  const username = useContext(uContext)
  return (
    // <uContext.Consumer>
    // {
    //     (value) => (
    //         <>
    //             <h1> Children 3 </h1>
    //             {`${value}`}
    //         </>
    //     )
    // } 
    // </uContext.Consumer>
    <>
      <h1> Children 3</h1>
      <h2> Hello {username}</h2>
    </>
  )
}

export default Children3
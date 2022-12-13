import React from 'react'
import {uContext} from './Parent';

function Children3() {
  return (
    <uContext.Consumer>
    {
        (value) => (
            <>
                <h1> Children 3 </h1>
                {`${value}`}
            </>
        )
    } 
    </uContext.Consumer>
  )
}

export default Children3
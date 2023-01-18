import React from 'react'
import HOC from './HOC';

function HoverCounter({count, incrementFunction, children}) {
//    use HOC props in this component.

  return (
    <div>
        {children}
        <h1 onMouseOver={incrementFunction}> Mouse over Heading {count} </h1>
    </div>
  )
}

export default HOC(HoverCounter)
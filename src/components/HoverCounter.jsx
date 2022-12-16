import React from 'react'
import HOC from './HOC';

function ClickCounter({count, incrementFunction, children}) {
//    use HOC props in this component.

  return (
    <div>
        {children}
        <h1 onMouseOver={incrementFunction}> Heading {count} </h1>
    </div>
  )
}

export default HOC(ClickCounter)
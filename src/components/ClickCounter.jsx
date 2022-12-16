import React from 'react'
import HOC from './HOC';

function ClickCounter({count, incrementFunction}) {
    // const [counter, setCounter] = useState(0);

  return (
    <div>
        <button type='button' onClick={incrementFunction}> Increment counter {count} </button>
    </div>
  )
}

export default HOC(ClickCounter)
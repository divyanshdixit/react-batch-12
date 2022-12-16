import React from 'react'
import HOC from './HOC';

function LeaveCounter({count, incrementFunction}) {
    // const [counter, setCounter] = useState(0);

  return (
    <div>
        <h2 onMouseLeave={incrementFunction}> Leave the mouse {count} </h2>
    </div>
  )
}

export default HOC(LeaveCounter)
import React from 'react'
import { useState } from 'react'
import MyChild from './MyChild'

function MyParent() {
    const [state, setState] = useState(null);
    const getChildData = (val) => {
        console.log('first', val)
        setState(val)
    }
    
  return (
    <div>
        <h1> MyParent Component: {state} </h1>
        <MyChild parentFunction={getChildData}/>
    </div>
  )
}

export default MyParent
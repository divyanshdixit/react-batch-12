import React from 'react'
import Children2 from './Children2'

function Childrens({uname}) {
  return (
    <>
        <div>Children {uname}</div>
        <Children2 uname={uname}/>
    </>
    // children2 => children 3
  )
}

export default Childrens
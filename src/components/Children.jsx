import React from 'react'
import Children2 from './Children2'

function Childrens({uname}) {

  // function 
  const getChildData = () => {

  }

  return (
    <>
        <div id='div1'>
          Children {uname}
        <h1 id=''> heading </h1>
        </div>
        <Children2 uname={uname} parentFunction={getChildData}/> 
        {/* pass function as props */}
    </>
    // children2 => children 3
  )
}

export default Childrens
import React from 'react'

function Heading({title, msg}) {
    // const {title, msg} = props; // object destructuring 
  return (
    <>
        <div>{title}</div>
        <div>{msg}</div>
    </>
  )
}
const g = 10;
const h = 11;
const i = 12;

export default Heading
export {g,h,i};
import React from 'react'

function Heading({title, text}) {
    console.log('Heading', title)
    // const {title, msg} = props; // object destructuring 
  return (
    <>
        <h1> {title} - {text}</h1>
    </>
  )
}
export default React.memo(Heading)
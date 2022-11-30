import React from 'react'

function Para(props) {
    const arr = [1,2,3,4];

  return (
    <div>
        {props.title}
        {
            arr.map((itm,i) => {
                return <p key={i}>{itm}</p>
                // key helps react to indentify which itm has changed.
            })
        }
    </div>
  )
}

export default Para
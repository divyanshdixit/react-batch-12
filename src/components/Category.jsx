import React from 'react'

function Category({name}) {
    const category = 'nveg';

  return (
    <div>
        {
            category == 'veg' ? `Category is ${category}` : `Category is non-veg`
        }
        
    </div>

    // <div>
    //     category is {name}
    // </div>
  )
}

export default Category
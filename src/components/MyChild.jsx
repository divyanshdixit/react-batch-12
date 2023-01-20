import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function MyChild({parentFunction}) {
    const [value, setValue] = useState('value form child compoennt');

    useEffect(() => {
        parentFunction(value);
    }, [value])

  return (
    <div>
        {/* <h1 onClick={() => setValue('new child value')}> MyChild component </h1> */}
        <button type='button' onClick={() => {setValue('new child value')}}> Clcik me </button>
    </div>
  )
}

export default MyChild
import React from 'react'
import { createContext } from 'react';
import { useState } from 'react'
import Children3 from './Children3'

const child2Context = createContext('ch');

function Children2() {
  const [child2, setChild2] = useState('child2 state');
  const [value , setValue ] = useState('value form child')

  return (
    <>
    <child2Context.Provider value={child2}>
      <div>Children2</div>
      <Children3/>
      </child2Context.Provider>
    </>
  )
}

export default Children2
export {child2Context}
import React,{useContext} from 'react'
import { createContext } from 'react';
import { useState } from 'react'
import Children3 from './Children3'
import { uContext, uContext1 } from './Parent';

const child2Context = createContext('ch');

function Children2() {
  const [child2, setChild2] = useState('child2 state');
  const [value , setValue ] = useState('value form children2')
  const parentProps = useContext(uContext);
  const parentProps1 = useContext(uContext1);
  console.log(parentProps, parentProps1)

  return (
    <>
      <div>Children2</div>
      <button type='button' onClick={() => parentProps.parentFun(value)}> click child 2</button>
      <button type='button' onClick={() => parentProps1(value)}> click button 2</button>
      <Children3/>
    </>
  )
}

export default Children2
export {child2Context}
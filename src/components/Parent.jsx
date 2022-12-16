import React, {useState, createContext, useContext} from 'react'
import Childrens from './Children';
import {child2Context} from './Children2';

const uContext = createContext('d'); // context api.

function returnComponent ({name}){
  return (
    <>
      {name}
    </>
  )
}

function Parent() {
    const [uname, setUname] = useState('niksdddd');
    const child2State = useContext(child2Context);
    console.log(child2State);

  return (
  
    uname ? 
    (
      <>
    <div>Parent {uname}</div>
    <uContext.Provider value={uname}>
      {/* all components in this tree will have access to the  uContext. 
      to use the Context in a child component, we need to access it using the useContext Hook
      */}
      <Childrens uname={uname}/>
    </uContext.Provider>
    <h2> {child2State}</h2>
    </>
    ):
    null 
  )

}

export default Parent
export { uContext }

// 
// parent => children1 => children2 => children3 (prop drilling), prop lifting
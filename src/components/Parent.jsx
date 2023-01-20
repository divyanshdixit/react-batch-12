import React, {useState, createContext, useContext} from 'react'
import Childrens from './Children';
import {child2Context} from './Children2';

const uContext = createContext('d'); // context api.
const uContext1 = createContext(null); // context api.

function Parent() {
  const child2State = useContext(child2Context);
  
  const getChildValue = (val) => {
    console.log(val)
  }

  const [uname, setUname] = useState({name:'niksssss', parentFun:getChildValue});
  return (
  
    uname ? 
    (
      <>
      <div>Parent {uname.name}</div>
      <uContext.Provider value={uname}>
        
        <uContext1.Provider value={getChildValue}>
        {/* all components in this tree will have access to the  uContext. 
        to use the Context in a child component, we need to access it using the useContext Hook
        */}
        <Childrens uname={uname}/>
        </uContext1.Provider>
      </uContext.Provider>
    <h2> {child2State}</h2>
    </>
    ):
    null 
  )

}

export default Parent
export { uContext, uContext1 }

// 
// parent => children1 => children2 => children3 (prop drilling), prop lifting
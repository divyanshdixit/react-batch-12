import React, {useState, createContext, useContext} from 'react'
import Childrens from './Children';

const uContext = createContext('nik');

function Parent() {
    const [uname, setUname] = useState('nik');
    console.log(uContext)


  return (
    <>
    <div>Parent</div>
    <Childrens uname={uname}/>
    </>
  )
}

export default Parent
export { uContext}

// 
// parent => children1 => children2 => children3 (prop drilling), prop lifting
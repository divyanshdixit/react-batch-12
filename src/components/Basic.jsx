import React from 'react'
import '../styles/index.css';
import * as Head from './Heading';
// import Heading, {g,h,i} from './Heading';
import Para from './Para';

function Basic() {
    const styles = {
        color:'red',
    }
  return (
    <div className='' contentEditable style={styles}> 
        Basic {Head.g} {Head.i}
        {/* <Heading title="Heading content" msg=''/>  */}
        <Head.default title="Heading content" msg=''/>
        <Para title="Para content"/>
    </div>
  )
}

export default Basic
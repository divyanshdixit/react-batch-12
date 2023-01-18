// HOC take a component as a parameter, and return an enhanced version (with logic written in HOC) of given component.

import React, { useState } from 'react'

const HOCcomponent = (OriginalComponent) => {
    
    const NewComponent = () => {
        
        const [counter, setCounter] = useState(0);
    
        const handleCounter = () => {
            console.log('first')
            setCounter(counter + 1);
        }
        return(
            <>
            <OriginalComponent prop1="someprop" count={counter} incrementFunction={handleCounter}/>
            </>
        )
    }

    return NewComponent;
}

// clouser function: js => self invoke function 

/*
const f1 = (() => {})()

*/

const fun1 = () => {

    const fun2 = () => {
        return 20;
    }

    return fun2;
}

fun1(); // fun2
export default HOCcomponent
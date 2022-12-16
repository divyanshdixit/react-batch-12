// 
import React, { useState } from 'react'

const HOC = (OriginalComponent, {children}) => {
    
    const NewComponent = () => {
        
        const [counter, setCounter] = useState(0);
    
        const handleCounter = () => {
            console.log('first')
            setCounter(counter + 1);
        }
        return(
            <>
            {children}
            
            <OriginalComponent prop1="someprop" count={counter} incrementFunction={handleCounter}/>
            </>
        )
    }
    return NewComponent;
}

export default HOC
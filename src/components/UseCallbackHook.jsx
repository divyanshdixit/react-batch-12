// Hook returns a memoized callback function.
// useMemo returns a memoized value and useCallback returns a memoized function.

import React, { useState, useCallback }  from 'react';

const UseCallbackHook = () => {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);

    const cachedFunction = useCallback( () => {
        setCount(count+1);
      }, [count])

    const increment = () => {
        let i=0;
        while(i<1000000000){
            i++;
        }
        setCount(count+1);
        // cachedFunction();
    }
  return (
    <>
    <h1> Count - {count} </h1>
    <button type='button' onClick={increment}>iNCREMENT</button>

    <h2> Count - {count1}</h2>
    <button type='button' onClick={() => setCount1(count1+1)}>iNCREMENT1</button>

    </>
  )
}

export default UseCallbackHook

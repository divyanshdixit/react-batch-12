// Hook returns a memoized callback function.
// useMemo returns a memoized value and useCallback returns a memoized function.
// where dealing with callbacks (functions)
// where we are sending/dealing with child component


import React, { useState, useCallback }  from 'react';
import { useEffect } from 'react';
import Button from './Button';
import Heading from './Heading';

const UseCallbackHook = () => {
    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

  //  before render // 2000
    const incrementTwo = useCallback(() => {
      setCountTwo(countTwo + 1);
    }, [countTwo])

    const incrementOne = useCallback(() => {
      setCountOne(countOne + 1);
    }, [setCountOne])


  return (
    <>

    <Heading text={countOne} title={'Count one'}/>

    <Button
      type='button'
      handleClick={incrementOne}
    >
      Increment1
    </Button>


    <Heading text={countTwo} title={'Count Two'}/>

    <Button
      type='button'
      handleClick={incrementTwo}
    >
      INCREMENT 2
    </Button>
    

    </>
  )
}

export default UseCallbackHook

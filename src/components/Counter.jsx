import React, { useState, useMemo} from 'react'

const Counter = ({children}) => {
    const [counter, setCounter] = useState(0);
    const [counter1, setCounter1] = useState(0);
    const [isEven, setIsEven] = useState(false);

    const checkIsEven=(counter) => {
        var i=0;
        while(i<1000000000){
            i++;
        }
        return counter%2 === 0
    }

    // useMemo(callback, [dependency array])
    const counterMemo = useMemo((counter)=> {
            var i=0;
            while(i<1000000000){
                i++;
            }
            return counter%2 === 0
    }, [counter])
    console.log(counterMemo)

  return (
    <>
    {children}
        <h1> counter - {counter}</h1>
        <h2> {counterMemo ? 'Odd' : 'Even'}</h2>
        <button type='button' onClick={() => setCounter(counter+1)}> Counter Button </button>

        <h3> Second Counter - {counter1}</h3>
        <button type='button' onClick={() => setCounter1(counter1+1)}> Counter Button 1</button>

    </>
  )
}


export default Counter
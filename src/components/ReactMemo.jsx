// React.memo => used for perfomance optimization, shallow comparison, reference equaltiy

// component re-render if any of props or state changed.


// reference 

// 10 == 10

// var f = 10; // 1000
// f = 20; // 1001

// var y = f;
// f = 30;
// console.log(y) // 20

// var obj1 = { // 2000
//     name:'divyansh'
// }

// var obj2 = obj1; // 2000

// obj2.name = 'newvalue'

// console.log(obj1, JSON.parse(JSON.stringify(obj1))) // 
// console.log(first) 

// const fun1 = () => {
//     console.log('first')
// }

// const fun2 = () => {
//     console.log('first')
// }


import React from 'react';

const ReactMemo = () => {
    return(
        <>
            <h1>heading </h1>
        </>
    )
}

export default React.memo(ReactMemo)
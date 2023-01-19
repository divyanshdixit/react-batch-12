// axios => npm pacakage 
// fetch api => js inbuilt => return a promise:

import React from 'react'
import { useEffect } from 'react'

function FetchApi() {
    // JSON.stringify() // 
    // JSON.parse()

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts', {method:POST, body:JSON.stringify(obj)} )// retunr a promise
    //         .then((res) => {
    //             // success
    //             res.json() // return promise
    //             .then(data => console.log(data))
    //             console.log(res);
    //         }, (err) => {
    //             // error
    //             console.log(err)
    //     })
    // },[]);

    useEffect(async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)// retunr a promise
        const data = await res.json();
        console.log(data)
    }, [])

    // async function funname(){ // retunr a promise
        // await => wait till promise resolved or rejected
    // }

    // const funname = async () => {}

  return (
    <div>
        fetchapi component
    </div>
  )
}

export default FetchApi





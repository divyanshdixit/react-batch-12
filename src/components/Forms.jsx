import React from 'react';
import { useState } from 'react';


const Forms = () => {
    const [name, setName] = useState("divyansh");// initial value
    const [email, setEmail] = useState("dd@gmail.com");// initial value

    const [detail, setDetail] = useState({fname:"", email:""});


    const changeName = (e) => {
        setName(e.target.value)
    }
    const changeEmail = (e) => {
        setEmail(e.target.value)
    }

    const changeDetail = (e) => {
        console.log(e, e.target.value, e.target.name)
        setDetail( (prev) => {
            return {
                ...prev, // fname:"", email:"", fname:'divyansh', email:'ddt'
                [e.target.name] : e.target.value
            }
        })
    }

    const submitValue = () => {
        console.log(detail);
    }
    return (
        <>
            <h1> Hello </h1>
            <input type="text" name="fname" placeholder="name" value={detail.fname} onChange={changeDetail}/>
            <input type="text" name="email" placeholder="email" value={detail.email} onChange={changeDetail}/>
            <button type="button" onClick={submitValue}> Submit </button>
        </>
    )
}

export default Forms
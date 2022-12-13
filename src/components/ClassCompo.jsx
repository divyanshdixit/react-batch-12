import React, { Component, useEffect } from 'react'

export class ClassCompo extends Component {
    constructor(){
       this.name = 'divyansh';
       this.age = 26
    }
    componentDidMount(){

    }
    shouldComponentUpdate(props, state ){

    }
    getSnapshotBeforeUpdate(prevProps, prevStates){
        
    }
  render() {
    return (
      <div>
        <h1> ClassCompo </h1>
        <p> para {state} </p>
        </div> // dom node 
    )
  }
}

export default ClassCompo

// 4 phases :

// window 
// document 
// head body
//     h1 p div span 
//     textnode textnode 

/*
mounting: constructor, static getDerivedStateFromProps, render, componentDidMount
updating: getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate, componentDidUpdate
unmounting : componentWillUnmount
error handling: getDerivedStateFromError, componentDidCatch

error boundry 
*/

useEffect()
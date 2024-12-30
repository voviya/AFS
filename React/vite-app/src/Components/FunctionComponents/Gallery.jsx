import React,{useState} from 'react';

const Gallery=()=>
{
    /*var counter=10;
    var[counter,setCounter]=useState(0);

    function increment()
    {
        setCounter(counter+1)
    }

    function decrement()
    {
        setCounter(counter-1)
    }
    var styling={
        fontSize:"20px",
        textDecoration:"none",
       textAlign:"center"}
    return (
        <section>
    <h4 style={styling}>Learning State</h4>
    <h2>This is Gallery Page.</h2>
    <p> The state of my variable counter is {counter}</p>
    <button onClick={increment}> Increment</button>
    <button onClick={decrement}> Decrement</button>
    </section>
    )
    */

    var[counter,setCounter]=useState(0);

   
    var styling={
        fontSize:"20px",
        textDecoration:"none",
       textAlign:"center"}
    return (
        <section>
    <h4 style={styling}>Learning State</h4>
    <h2>This is Gallery Page.</h2>
    <p> The state of my variable counter is {counter}</p>
    <button onClick={()=>setCounter(counter+1)}> Increment</button>
    <button onClick={()=>setCounter(counter-1)}> Decrement</button>
    <button onClick={()=>setCounter(0)}> Reset</button>
    </section>
    )
    
}
export default Gallery;
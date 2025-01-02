import {useState,useRef,useEffect} from 'react';

var UseRef=()=>
{
var [text,setText]=useState("")
var prevText=useRef("");

useEffect(()=>{
    prevText.current=text
},[text])
    return(
        <section>
            <h1>This is an example of useRef.</h1>
           <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <h2>My current render is {text}</h2>
            <h3>Previous Render is {prevText.current}</h3>

        </section>
    );
};
export default UseRef;
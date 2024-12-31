import { useEffect } from 'react';
import {useState} from 'react';

var UseEffect=()=>
{
    var[text,setText]=useState('KEC');
    useEffect(()=>{
        setText="KEC College"
    },text
    )
    return(
        <section>
            <h1>This is UseEffect</h1>
            <input type="text"
            placeholder="type your text" 
            onChange={(e)=>setText(e.target.value)}/>
            <h2>Text typed is {text}</h2>
        </section>
    )
}
export default UseEffect;
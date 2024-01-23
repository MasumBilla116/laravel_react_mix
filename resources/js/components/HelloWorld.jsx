
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

export default function HelloWorld() {
    const [count,setCount] = useState(0);
    const increment = () =>{
        setCount(count+1);
    }
    const decrement = () =>{
        if((count-1) > 0)
        {
            setCount(count-1) 
        }
    }
    return (
        <>
            <button type='button' onClick={increment}>Increment</button>
            <span>{count}</span>
            <button type='button' onClick={decrement}>
                Decrement
            </button>
        </>
    );
}


const container = document.getElementById('hello-react');
const root = ReactDOM.createRoot(container);

root.render(<HelloWorld /> );
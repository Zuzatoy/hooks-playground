import React, { useState } from "react";


export default function CounterFunction () {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <p>{counter}</p>
            <button onClick={() => setCounter(counter+1)}>+</button>
            <button onClick={() => setCounter(counter-1)}>-</button>
            <button onClick={() => setCounter(0)}>reset</button>
        </div>
    )
}
